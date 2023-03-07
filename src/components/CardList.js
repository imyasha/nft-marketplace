import React from "react";
import { useNavigate } from "react-router-dom";

import NFTCard from "./NFTCard";
import "../styles/CardList.css";

const CardList = ({ list, type = "horizontal" }) => {
  let navigate = useNavigate();

  return (
    <div
      className="card-list"
      style={{ flexDirection: type === "horizontal" ? "row" : "column" }}
    >
      {list.map((item, index) => {
        const metadata = JSON.parse(item.metadata);
        return (
          <NFTCard
            nftSrc={metadata.image}
            nftName={item.name}
            key={index}
            onClick={() => navigate("/detail", { state: { item: item } })}
          />
        );
      })}
    </div>
  );
};

export default CardList;
