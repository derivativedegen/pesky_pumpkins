import { useEffect, useState } from "react";
import "./style.css";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "../../candy-machine";

import {
  selectAddress,
  selectBalance,
  setConnected,
  setAddress,
  setBalance,
  setLoading,
  selectLoading,
  setCurrentPage,
} from "../../redux/app";
import { useDispatch, useSelector } from "react-redux";

import example from "../../assets/images/nfteepee4.png";
import teepee_gif from "../../assets/images/teepee_gif.gif";

const ConnectButton = styled(WalletDialogButton)``;
const CounterText = styled.span``; // add your styles here
const MintContainer = styled.div``; // add your styles here
const MintButton = styled(Button)``; // add your styles here

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);
const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);
const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

const Mint = () => {
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const loading = useSelector(selectLoading);
  const addressFull = useSelector(selectAddress);
  const addressShort = shortenAddress(addressFull);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(startDateSeed));

  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  // Mint Function
  const onMint = async () => {
    try {
      dispatch(setLoading(true));
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          config,
          wallet.publicKey,
          treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      dispatch(setLoading(false));
    }
  };

  // Set Address & Balance
  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        dispatch(setBalance(balance / LAMPORTS_PER_SOL));
        // setCompBalance(balance / LAMPORTS_PER_SOL);

        const address = wallet.publicKey?.toBase58() || "";
        dispatch(setAddress(address));
      }
    })();
  }, [wallet, connection]);

  //Set Connected
  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(anchorWallet, candyMachineId, connection);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
      dispatch(setConnected(wallet.connected));
    })();
  }, [wallet, candyMachineId, connection]);

  useEffect(() => {
    dispatch(setCurrentPage("mint"));
  }, []);

  return (
    <div className="col-12 h-100 d-flex flex-column align-items-center">
      <div className="col-3">
        {/* <img
          src={example}
          alt="nfteepee_example"
          className="nfteepee_example"
        /> */}
        <img className="img-fluid teepee_gif" src={teepee_gif} alt="" />
      </div>
      <div className="col-6 mint_box">
        <div className="minting_stats d-flex flex-row col-12 justify-content-around align-items-center h-100">
          {wallet.connected && (
            <p>
              <span className="stat_header">Address</span>
              <br />
              <span className="stat">{addressShort}</span>
            </p>
          )}
          <MintContainer>
            {!wallet.connected ? (
              <ConnectButton>CONNECT</ConnectButton>
            ) : (
              <MintButton
                disabled={isSoldOut || loading || !isActive}
                onClick={onMint}
                variant="contained"
              >
                {isSoldOut ? (
                  "SOLD OUT"
                ) : isActive ? (
                  loading ? (
                    <CircularProgress />
                  ) : (
                    "mint"
                  )
                ) : (
                  <Countdown
                    date={startDate}
                    onMount={({ completed }) => completed && setIsActive(true)}
                    onComplete={() => setIsActive(true)}
                    renderer={renderCounter}
                  />
                )}
              </MintButton>
            )}
          </MintContainer>
          {wallet.connected && (
            <p>
              <span className="stat_header">Balance</span>
              <br />
              <span className="stat">
                {(balance || 0).toLocaleString()} SOL
              </span>
            </p>
          )}
        </div>
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Mint;
