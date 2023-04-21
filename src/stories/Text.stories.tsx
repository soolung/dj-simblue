import React from "react";
import Text from "../components/Text";
import typo from "../theme/typo";
import palette from "../theme/palette";

export default {
  title: "Component/Text",
  component: Text,
};

export const Default = () => {
  return (
    <div>
      <Text
        children="요요 디제이 심청~"
        typo={typo.PARAGRAPH.MEDIUM}
        textColor={palette.MONO_BLACK}
      />
    </div>
  );
};

export const Varient = () => {
  return (
    <div>
      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Display" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <Text
        display="block"
        children="large 96px"
        typo={typo.DISPLAY.LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="medium 52px"
        typo={typo.DISPLAY.MEDIUM}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="small 44px"
        typo={typo.DISPLAY.SMALL}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="x-small 36px"
        typo={typo.DISPLAY.X_SMALL}
        textColor={palette.MONO_BLACK}
      />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Heading" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <Text
        display="block"
        children="xx-large 40px"
        typo={typo.HEADING.XX_LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="x-large 36px"
        typo={typo.HEADING.X_LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="large 32px"
        typo={typo.HEADING.LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="medium 28px"
        typo={typo.HEADING.MEDIUM}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="small 24px"
        typo={typo.HEADING.SMALL}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="x-small 20px"
        typo={typo.HEADING.X_SMALL}
        textColor={palette.MONO_BLACK}
      />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Label" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <Text
        display="block"
        children="large 18px"
        typo={typo.LABEL.LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="medium 16px"
        typo={typo.LABEL.MEDIUM}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="small 14px"
        typo={typo.LABEL.SMALL}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="x-small 12px"
        typo={typo.LABEL.X_SMALL}
        textColor={palette.MONO_BLACK}
      />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Paragraph" typo={typo.HEADING.SMALL} textColor={palette.GREEN_400} />
      </header>
      <Text
        display="block"
        children="large 18px"
        typo={typo.PARAGRAPH.LARGE}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="medium 16px"
        typo={typo.PARAGRAPH.MEDIUM}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="small 14px"
        typo={typo.PARAGRAPH.SMALL}
        textColor={palette.MONO_BLACK}
      />
      <Text
        display="block"
        children="x-small 12px"
        typo={typo.PARAGRAPH.X_SMALL}
        textColor={palette.MONO_BLACK}
      />
    </div>
  );
};
