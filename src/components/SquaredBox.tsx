import React from "react";
import { Box, BoxProps } from "@mui/material";

const styles = {
  notchStyle: {
    borderColor: "transparent",
    borderStyle: "solid"
  }
};

interface SquaredBoxProps extends BoxProps {
  size: number;
  backgroundColor?: string;
}

// Renders a box with a squared border around it
const SquaredBox: React.FC<SquaredBoxProps> = ({ size, backgroundColor, ...props }) => {
  return (
    <>
      <Box
        sx={{
          ...styles.notchStyle,
          borderBottomWidth: size,
          borderBottomColor: backgroundColor,
          height: size,
          borderLeftWidth: size,
          borderRightWidth: size
        }}
      />
      <Box
        {...props}
        sx={{
          ...props.sx,
          backgroundColor: backgroundColor
        }}
      />
      <Box
        sx={{
          ...styles.notchStyle,
          borderTopWidth: size,
          borderTopColor: backgroundColor,
          height: size,
          borderLeftWidth: size,
          borderRightWidth: size
        }}
      />
    </>
  );
};

export default SquaredBox;
