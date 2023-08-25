import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card__container">
        <div className="title">Basic Info</div>
        <div className="details">
          <div className="details__alignment">
            <div className="detail__title">Chain Id</div>
            <div className="detail__info">{data.chainId}</div>
          </div>
          <div className="details__alignment">
            <div className="detail__title">Dex Id</div>
            <div className="detail__info">{data.dexId}</div>
          </div>
          <div className="details__alignment">
            <div className="detail__title">FDV</div>
            <div className="detail__info">{data.fdv}</div>
          </div>
        </div>
      </div>
      <div className="card__container">
        <div className="title">Base Token</div>
        <div className="details">
          <div className="details__alignment">
            <div className="detail__title">Name</div>
            <div className="detail__info">{data.baseToken.name}</div>
          </div>
          <div className="details__alignment">
            <div className="detail__title">Symbol</div>
            <div className="detail__info">{data.baseToken.symbol}</div>
          </div>
        </div>
      </div>
      <div className="card__container">
        <div className="title">Quote Token</div>
        <div className="details">
          <div className="details__alignment">
            <div className="detail__title">Name</div>
            <div className="detail__info">{data.quoteToken.name}</div>
          </div>
          <div className="details__alignment">
            <div className="detail__title">Symbol</div>
            <div className="detail__info">{data.quoteToken.symbol}</div>
          </div>
        </div>
      </div>
      <div className="card__container">
        <div className="title">Quote Token</div>
        <div className="details">
          <div className="details__alignment">
            <div className="detail__title">Price Native</div>
            <div className="detail__info">{data.priceNative}</div>
          </div>
          <div className="details__alignment">
            <div className="detail__title">Price USD</div>
            <div className="detail__info">{data.priceUsd}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
