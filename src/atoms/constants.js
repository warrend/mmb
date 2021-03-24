import { atom } from "recoil";
import theme from "../theme";

export default {
  theme: atom({
    key: "theme",
    default: theme,
  }),
};
