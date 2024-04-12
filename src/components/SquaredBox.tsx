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

// In order to get rectangular corners we need to use 2 extra views
// https://stackoverflow.com/questions/62127340/notched-corner-rectangles-in-react-native
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
