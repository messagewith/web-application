import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: "#254E8C";
    primaryLight: "#365F9D";
    primaryDark: "#143D7B";
    secondary: "#64A82F";
    secondaryLight: "#75B93F";
    secondaryDark: "#53971E";
    foreground: "#1F1F1F";
    background: "#ffffff";
    backgroundSecond: "#fbfbfb";
    washSuperLight: "#f5f5f5";

    borderRadiusR: "6px";

    boxShadow: string;
    boxShadowStronger: string;
  }
}
