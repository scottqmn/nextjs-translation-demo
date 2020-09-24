import React from "react";
import { withTranslation } from "../i18n";

const Hero = ({ t }) => {
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
    </div>
  );
};

export default withTranslation("hero")(Hero);
