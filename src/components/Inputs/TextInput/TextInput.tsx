import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";
import { InputSizeType, getSizeFromName, inputSize } from "../../../theme/size";
import palette from "../../../theme/palette";
import Text from "../../Text";
import { Icon } from "../../Icon";
import { IconNameType } from "../../../utils/stories";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  areaSize: InputSizeType;
  labelText?: string;
  hintText?: string;
  icon?: IconNameType | "none";
}

export const TextInput = ({
  areaSize = "SMALL",
  labelText = "Label",
  icon = "none",
  ...props
}: TextInputProps) => {
  return (
    <TextInputBox>
      <Text typo="LABEL_MEDIUM">{labelText}</Text>
      <Input>
        <TextInputStyle icon={icon} areaSize={areaSize} {...props} />
        {icon !== "none" && <Icon iconName={icon} />}
      </Input>
      <Text typo="PARAGRAPH_SMALL" textColor="GRAY_700">
        {props.hintText}
      </Text>
    </TextInputBox>
  );
};

const TextInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: inherit;

  svg {
    position: absolute;
    width: 1rem;
    left: 1rem;
  }
`;

const TextInputStyle = styled.input<TextInputProps>`
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid ${palette.GRAY_100};
  padding-left: ${({ icon }) => (icon !== "none" ? 2.5 : 1)}rem;
  padding-right: 1rem;
  ${({ areaSize }) => getSizeFromName(inputSize, areaSize)}
  &::placeholder {
    color: ${palette.GRAY_700};
  }
`;
