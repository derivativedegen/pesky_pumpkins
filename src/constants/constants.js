const candyMachine = process.env.REACT_APP_CANDY_MACHINE_ID;

export const contractInfo = {
  mainnet: "",
  devnet: candyMachine,
};

export const links = {
  twitter: {
    url: "https://twitter.com/NFTeePeeClub",
    text: "Twitter",
  },
  discord: {
    url: "https://discord.gg/QAuZWqGHW4",
    text: "Discord",
  },
  opensea: {
    url: "https://opensea.io/collection/nft-blockheadz",
    text: "Opensea",
  },
  medium: {
    url: "https://medium.com/@nftblockheadz/560fca36a96",
    text: "Medium",
  },
  contract: {
    url: `https://solscan.io/account/${contractInfo.devnet}`,
    text: "Contract",
  },
};
