import {Box, BoxProps, Stack, Typography} from "@mui/material";
import {kertosPalette} from "../theme/kertosPalette";
import React from "react";
import Logo from "../assets/logo.svg?react";
import Illustration from "../assets/illustration.svg?react";
import SquaredBox from "./SquaredBox.tsx";

export const AuthenticationContainer: React.FC<BoxProps> = ({children}) => {
    const backgroundColor = kertosPalette.blue["300"];
    const textColor = kertosPalette.blue["100"];

    return (
        <Stack
            sx={{
                flex: 1,
                backgroundColor: "background.paper"
            }}
            direction="row"
        >
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: 2,
                height: "100vh"
            }}>
                <SquaredBox
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: backgroundColor,
                        p: 5
                    }}
                    size={20}
                    backgroundColor={backgroundColor}
                >
                    <Stack sx={{
                        maxWidth: 420,
                        justifyContent: "space-between",
                        height: "100%",
                    }}>
                        <Typography sx={{fontSize: 70, lineHeight: "70px"}} color={textColor}>
                            Welcome to the future of compliance operations.
                        </Typography>
                        <Illustration fill={textColor}/>
                    </Stack>
                </SquaredBox>
            </Box>
            <Stack sx={{
                flex: 1,
                paddingTop: 2,
                paddingBottom: 2,
                paddingRight: 2,
                alignItems: "center"
            }}>
                <Stack sx={{
                    flex: 1,
                    width: "70%",
                    minWidth: "400px",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Logo style={{
                            fill: "text.primary",
                            width: "220%",
                            height: "auto",
                            marginBottom: 20
                        }} fill={"inherit"}/>
                    </Box>
                    {children}
                </Stack>
            </Stack>
        </Stack>
    );
};