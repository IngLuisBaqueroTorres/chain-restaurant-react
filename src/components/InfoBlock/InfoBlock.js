import React from "react";
import "./InfoBlock.css";
import { useTranslation } from "react-i18next";

const InfoBlock = ({ quantitySold, customersServed, ratings }) => {
  const { t } = useTranslation();
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div className="block">
        <div className="quantity">
        <h3 className="value">
            +{quantitySold}300
          </h3>
          <span className="title">{t("Block1.sales")}</span>
        </div>

        <div className="customers">
        <h3 className="value">
            +{customersServed}200
          </h3>
          <span className="title">{t("Block1.visits")}</span> 
        </div>

        <div className="ratings">
        <h3 className="value">
            +{ratings}4.5
          </h3>
          <span className="title">{t("Block1.rate")}</span>
        </div>
        
      </div>
    </div>
  );
};

export default InfoBlock;
