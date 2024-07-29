export type Theme = {
  backgroundColor: string;
  textColor: string;
  backgroundAccent: string;
  iconColor: string;
  backgroundModal: string;
  colorModal: string;
  backgroundSwitcherThemes: string;
  backgroundSwitcher: string;
  colorDarkIcon: string;
  colorLightIcon: string;
};

export const lightTheme: Theme = {
  backgroundColor: "rgb(255, 255, 255)",
  textColor: "rgb(14, 12, 21)",
  backgroundAccent: "#e6f5fd",
  iconColor: "rgb(34, 43, 68)",
  backgroundModal: "rgb(69 97 116);",
  colorModal: "rgb(255, 255, 255)",
  backgroundSwitcherThemes: "rgb(255, 255, 255)",
  backgroundSwitcher: "rgb(219, 224, 228)",
  colorDarkIcon: "rgb(173, 184, 192)",
  colorLightIcon: "rgb(14, 12, 21)",
};

export const darkTheme: Theme = {
  backgroundColor: "rgb(14, 12, 21)",
  textColor: "rgb(255, 255, 255)",
  backgroundAccent: "rgb(34, 43, 68)",
  iconColor: "rgb(255, 255, 255)",
  backgroundModal: "rgb(222, 222, 222)",
  colorModal: "rgb(0, 0, 0)",
  backgroundSwitcherThemes: "rgb(18, 24, 37)",
  backgroundSwitcher: "rgb(34, 43, 68)",
  colorDarkIcon: "rgb(255, 255, 255)",
  colorLightIcon: "rgb(97, 109, 141)",
};
