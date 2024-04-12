/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare global {
    declare module "*.woff2";
    declare module "chroma-js";
    declare module "react-swipeable-views";
    declare module "draft-convert";
    declare module "react-syntax-highlighter";
    declare module "react-syntax-highlighter/dist/esm/styles/hljs";
    type Styles = { [key: string]: React.CSSProperties | Styles };
}
