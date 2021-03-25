import { atom } from "recoil";
import theTheme from "../theme";

export default {
  theme: atom({
    key: "theme",
    default: theTheme,
  }),
};
