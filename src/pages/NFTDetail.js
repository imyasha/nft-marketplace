import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router";
import Card from "../components/base/Card";
import "../styles/NFTDetail.css";
import { ColorExtractor } from "react-color-extractor";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useMobile } from "../hooks/isMobile";

const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [isLike, setIsLike] = useState(false);

  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  const metadata = JSON.parse(state.item.metadata);

  return (
    <div>
      <Header />
      <div id="nft-detail-card-wrapper">
        <Card
          width={isMobile ? "100%" : "65vw"}
          height={isMobile ? "700px" : "60vh"}
          blurColor={colors[0]}
          child={
            //Detail Content
            <div id="detail-content">
              <ColorExtractor getColors={getColors}>
                <img id="detail-image" alt="" src={metadata.image} />
              </ColorExtractor>

              <div id="detail-info" style={{}}>
                <div id="detail-info-container">
                  <p id="collection"> {state.item.name} </p>
                  <p id="name"> {state.item.name} </p>
                  <p id="description">
                    This one-of-a-kind CryptoKitty is a unique and collectible
                    digital asset that lives on the Ethereum blockchain. Created
                    with a rare genetic makeup, this CryptoKitty features
                    beautiful blue eyes, a playful personality, and a love for
                    snuggles.
                  </p>
                </div>

                <div id="detail-controls">
                  <a
                    href={`https://opensea.io/assets/ethereum/${state.item.token_address}/${state.item.token_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Sea
                  </a>
                  <div className="like-container">
                    <button className="like" onClick={like}>
                      {!isLike ? (
                        <AiOutlineHeart size="45" color="white" />
                      ) : (
                        <AiFillHeart size="45" color="#00f5c966" />
                      )}
                    </button>
                    <p className="like-count">123</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default NFTDetail;
