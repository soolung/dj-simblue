import React from "react";
import { SsamblueLogo, SimblueLogo } from "../components/Logo";
import logoSize from "../theme/size";
import Text from "../components/Text";
import typo from "../theme/typo";
import palette from "../theme/palette";

export default {
  title: "Component/Logo",
  component: SimblueLogo,
};

export const Simblue = () => {
  return (
    <div>
      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Default" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <SimblueLogo size={logoSize.DEFAULT} />

      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Medium" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <SimblueLogo size={logoSize.MEDIUM} />
    </div>
  );
};

export const Ssamblue = () => {
  return (
    <div>
      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Default" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <SsamblueLogo size={logoSize.DEFAULT} />

      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Medium" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <SsamblueLogo size={logoSize.MEDIUM} />
    </div>
  );
};
