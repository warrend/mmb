import { atom } from "recoil";
import theme from "../theme";

const theTheme = theme;

export default {
  theme: atom({
    key: "theme",
    default: theTheme,
  }),
};
