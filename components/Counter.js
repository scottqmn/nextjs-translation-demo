import React, { useState } from "react";
import { withTranslation } from "../i18n";

const Counter = ({ t }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{t("label")}</div>
      <button
        aria-label={t("button", { count: count })}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default withTranslation("counter")(Counter);
