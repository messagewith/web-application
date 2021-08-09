import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: "#254E8C";
    primaryLight: "#365F9D";
    primaryDark: "#143D7B";
    secondary: "#64A82F";
    secondaryLight: "#75B93F";
    secondaryDark: "#53971E";
    tertiary: "#EF1549";
    tertiaryLight: "#FF265A";
    tertiaryDark: "#DE0438";
    foreground: "#1F1F1F";
    background: "#ffffff";
    backgroundSecond: "#fbfbfb";
    washSuperLight: "#f5f5f5";
    washLight: "#EEEEEE";
    washMedium: "#DCDCDC";
    washHeavy: "#959595";
    washSuperHeavy: "#575757";

    available: "#38C78A";

    primaryToTertiaryGradient: "linear-gradient(18.6deg, #EF1549 -17.34%, #254E8C 96.64%)";

    borderRadiusR: "6px";
    borderRadiusL: "8px";
    borderRadiusXL: "10px";

    boxShadow: string;
    boxShadowStronger: string;
  }
}
