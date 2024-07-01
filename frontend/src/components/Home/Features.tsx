import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Blockchain Features</div>
      <div className="title-small">
        Benefit of Blockchain Voting over Traditional Voting
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
            All the records in the blockchain are individually encrypted. Using encryption 
            adds another layer of security to the entire process on the blockchain network. 
            Since there is no central authority, it does not mean that one can simply add, 
            update or delete data on the network.Every information on the blockchain is hashed 
            cryptographically which means that every piece of data has a unique identity on 
            the network
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
            The blockchain network is decentralized which means that there is no central 
            governing authority that will responsible for all the decisions. Rather a group of
            nodes makes and maintain the network. Each and every node in the blockchain network
            has the same copy of the ledger.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
             All network participants have a copy of the ledger for complete transparency.
             A public ledger will provide complete information about all the participants on 
             the network and transactions. The distributed computational power across the 
             computers ensures a better outcome.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
