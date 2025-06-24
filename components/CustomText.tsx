import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

type CustomTextProps = TextProps & {
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  style?: TextStyle | TextStyle[];
};

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  numberOfLines = 2,
  ellipsizeMode = "tail",
  style,
  ...rest
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={style}
      {...rest}
    >
      {children}
    </Text>
  );
};
