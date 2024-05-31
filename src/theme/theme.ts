import {createTheme, ThemeOptions} from "@mui/material";

import TTHovesProBold from "../assets/fonts/TTHovesPro-Bold.woff2";
import TTHovesProMedium from "../assets/fonts/TTHovesPro-Medium.woff2";
import TTHovesProRegular from "../assets/fonts/TTHovesPro-Regular.woff2";

import SpaceGroteskLight from "../assets/fonts/SpaceGrotesk-Light.woff2";
import SpaceGroteskRegular from "../assets/fonts/SpaceGrotesk-Regular.woff2";
import SpaceGroteskMedium from "../assets/fonts/SpaceGrotesk-Medium.woff2";
import SpaceGroteskSemiBold from "../assets/fonts/SpaceGrotesk-SemiBold.woff2";
import SpaceGroteskBold from "../assets/fonts/SpaceGrotesk-Bold.woff2";
import { kertosPalette } from "./kertosPalette";

export function getComponentStyleOverrides(): ThemeOptions["components"] {
    return {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'TTHovesPro';
          font-style: normal;
          font-display: swap;
          font-weight: 800;
          src: local('TTHovesPro-Bold'), local('TTHovesPro-Bold'), url(${TTHovesProBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'TTHovesPro';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('TTHovesPro-Medium'), local('TTHovesPro-Medium'), url(${TTHovesProMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
       @font-face {
          font-family: 'TTHovesPro';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('TTHovesPro-Regular'), local('TTHovesPro-Regular'), url(${TTHovesProRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
         @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-display: swap;
          font-weight: 100;
          src: local('SpaceGrotesk-Light'), local('Space Grotesk'), url(${SpaceGroteskLight}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('SpaceGrotesk-Regular'), local('Space Grotesk'), url(${SpaceGroteskRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('SpaceGrotesk-Medium'), local('Space Grotesk'), url(${SpaceGroteskMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('SpaceGrotesk-SemiBold'), local('Space Grotesk'), url(${SpaceGroteskSemiBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Space Grotesk';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: local('SpaceGrotesk-Bold'), local('Space Grotesk'), url(${SpaceGroteskBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
        },
        MuiFilledInput: {
            styleOverrides: {
                underline: {
                    "::before": {
                        borderBottom: 0
                    },
                    "::after": {
                        borderBottom: 0
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: 0
                    }
                }
            }
        },
    };
}

const palette: ThemeOptions["palette"] = {
    mode: "light",
    tonalOffset: 0.05,
    primary: {
        light: kertosPalette.blue["200"],
        main: kertosPalette.blue["300"],
        dark: kertosPalette.blue["400"],
        contrastText: "#ffffff"
    },
    secondary: {
        light: kertosPalette.green["200"],
        main: kertosPalette.green["400"],
        dark: kertosPalette.green["500"],
        contrastText: "#212B45"
    },
    text: {
        primary: "#131C32",
        secondary: "#8A9099"
    },
    background: {
        default: kertosPalette.background.default,
        paper: kertosPalette.background.paper
    },
    divider: "#EBEDF3",
    success: {
        light: kertosPalette.green["200"],
        main: "#A8ED8F",
        dark: kertosPalette.green["700"],
        contrastText: "#131C32"
    },
    info: {
        light: kertosPalette.violet["100"],
        main: kertosPalette.violet["300"],
        dark: kertosPalette.violet["500"],
        contrastText: kertosPalette.violet["500"]
    },
    error: {
        main: "#f35d75",
        dark: "#a84a45",
        contrastText: "#ffffff"
    },
    warning: {
        light: kertosPalette.violet["200"],
        main: kertosPalette.violet["400"],
        dark: kertosPalette.violet["500"],
        contrastText: kertosPalette.violet["500"]
    },
};

const shadows = [
    `2px 5px 5px #1324520D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    `0px 0px 8px #1324521D`,
    "none"
];

export const theme = createTheme({
    palette: palette,
    spacing: 8,
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    shape: {
        borderRadius: 8
    },
    // @ts-ignore
    shadows: shadows,
    typography: {
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        fontFamily: `'TTHovesPro', sans-serif`,
        h1: {
            fontWeight: 800
        },
        h2: {
            fontWeight: 800
        },
        h3: {
            fontWeight: 800
        },
        h4: {
            fontWeight: 600
        },
        h5: {
            fontWeight: 800
        },
        h6: {
            fontWeight: 600
        }
    },
    components: getComponentStyleOverrides()
});

