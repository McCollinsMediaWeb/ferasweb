import { useTranslation } from "next-i18next";
import React from "react";

const CateringCall = () => {
  const { t: translate } = useTranslation("common");
  return (
    <div className="cateringCall">
      <h2 style={{ color: "#c18f5c" }}>{translate("callus")}</h2>
      <div>
        <a href="tel:054 584 4844" style={{ border: "none" }}>
          <button>054 584 4844</button>
        </a>

        <a href="tel:054 584 4844" style={{ border: "none" }}>
          <button>04 770 8147</button>
        </a>
      </div>
    </div>
  );
};

export default CateringCall;
