import { Checkbox } from "../../elements";
import { NovaDialog } from "..";
import template from "./test.html";

type Model = {
  theBox: boolean;
};

const buttons = {
  yay: {
    default: true,
    label: "The default button",
  },
  echo: {
    default: true,
    icon: "play",
    label: "Echo!",
    callback: (params: Model) => {
      console.info(`TheBox: ${params.theBox ? "yes" : "no"}`);
    },
  },
};

const elements = {
  theBox: new Checkbox("theBox", {
    label: "This is a test checkbox",
  }),
};

export const Test = new NovaDialog({
  title: "A test",
  elements,
  buttons,
  template,
});
