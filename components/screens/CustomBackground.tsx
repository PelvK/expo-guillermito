import { BACKGROUND_OPACITY } from "@/constants"
import { ImageBackground } from "react-native"

import React, { ReactNode } from "react";

type CustomBackgroundProps = {
    children: ReactNode;
};

export const CustomBackground: React.FC<CustomBackgroundProps> = ({ children }) => {
    return (
        <ImageBackground
              source={require('@/assets/background.png')}
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
              imageStyle={{ opacity: BACKGROUND_OPACITY }}
            >
                {children}
        </ImageBackground>
    )
}