import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/app";
import "./style.css";

export default function Terms(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("terms"));
  }, []);

  return (
    <div className="terms_container col-12 d-flex justify-content-center">
      <div className="page_box terms_text col-12 col-lg-8">
        <h1 className="terms_heading">Terms & Conditions</h1>
        <p className="terms_paragraph">
          NFTeePeeClub is a collection of digital artworks (NFTs) running on the
          Solana network. This website is only an interface allowing
          participants to exchange digital collectibles. Users are entirely
          responsible for the safety and management of their own private Solana
          wallets and validating all transactions and contracts generated by
          this website before approval. Furthermore, as the NFTeePeeClub smart
          contract runs on the Solana network, there is no ability to undo,
          reverse, or restore any transactions. This website and its connected
          services are provided “as is” and “as available” without warranty of
          any kind. By using this website you are accepting sole responsibility
          for any and all transactions involving NFTeePeeClub digital
          collectibles.
        </p>
        <hr
          style={{
            color: "white",
            width: "100%",
            justifySelf: "center",
          }}
        />
        <h1 className="terms_heading">Ownership</h1>
        <p className="terms_paragraph">
          i. You Own the NFT. Each NFTeePee is an NFT on the Solana blockchain.
          When you purchase an NFT, you own the underlying NFTeePee, the Art,
          completely. Ownership of the NFT is mediated entirely by the Smart
          Contract and the Solana Network: at no point may we seize, freeze, or
          otherwise modify the ownership of any NFTeePee.
        </p>

        <p className="terms_paragraph">
          ii. Personal Use. Subject to your continued compliance with these
          Terms, the NFTeePeeClub DAO grants you a worldwide, royalty-free
          license to use, copy, and display the purchased Art, along with any
          extensions that you choose to create or use, solely forthe following
          purposes: (i) for your own personal, non-commercial use; (ii) as part
          of a marketplace that permits the purchase and sale of your NFTeePee /
          NFT, provided that the marketplace cryptographically verifies each
          NFTeePee owner’s rights to display the Art for their NFTeePee to
          ensure that only the actual owner can display the Art; or (iii) as
          part of a third party website or application that permits the
          inclusion, involvement, or participation of your NFTeePee, provided
          that the website/application cryptographically verifies each NFTeePee
          owner’s rights to display the Art for their NFTeePee to ensure that
          only the actual owner can display the Art, and provided that the Art
          is no longer visible once the owner of the NFTeePee leaves the
          website/application.
        </p>
        <p className="terms_paragraph">
          iii. Commercial Use. Subject to your continued compliance with these
          Terms, the NFTeePeeClub DAO grants you an unlimited, worldwide license
          to use, copy, and display the purchased Art for the purpose of
          creating derivative works based upon the Art (“Commercial Use”).
          Examples of such Commercial Use would e.g. be the use of the Art to
          produce and sell merchandise products (T-Shirts etc.) displaying
          copies of the Art. For the sake of clarity, nothing in this Section
          will be deemed to restrict you from (i) owning or operating a
          marketplace that permits the use and sale of NFTeePeeClub generally,
          provided that the marketplace cryptographically verifies each NFTeePee
          owner’s rights to display the Art for their NFTeePee to ensure that
          only the actual owner can display the Art; (ii) owning or operating a
          third party website or application that permits the inclusion,
          involvement, or participation of NFTeePeeClub generally, provided that
          the third party website or application cryptographically verifies each
          NFTeePee owner’s rights to display the Art for their NFTeePee to
          ensure that only the actual owner can display the Art, and provided
          that the Art is no longer visible once the owner of the Purchased
          NFTeePee leaves the website/application; or (iii) earning revenue from
          any of the foregoing.
        </p>
      </div>
    </div>
  );
}
