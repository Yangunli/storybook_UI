import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    argTypes: { onClick: { action: "clicked" } },
    backgroundColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Amber = {
  args: {
    size: "md",
    label: "Button",
    backgroundColor: "amber-300",
  },
};

export const Large = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "sm",
    label: "Button",
  },
};
