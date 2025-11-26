import type { Meta, StoryObj } from "@storybook/react";
import ProgressSlider from "./index";
import type { PrivateExtensionsProcessSliderProps } from "./index";
import { configProps, stateProps } from "./mock";

const meta: Meta<PrivateExtensionsProcessSliderProps> = {
  title: "LocalExtensions/ProgressSlider",
  component: ProgressSlider,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<PrivateExtensionsProcessSliderProps>;

export const Primary: Story = {
  args: {
    ...configProps,
    ...stateProps,
    displayMode: "EDIT",
    displayAs: "slider",
    validatemessage: "",
    status: "success",
    helperText: "Adjust the slider",
    hideLabel: false,
    getPConnect: () => ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
        triggerFieldChange: () => {},
      }),
      getStateProps: () => stateProps,
      getConfigProps: () => configProps,
      getRawMetadata: () => ({ config: { label: configProps.label } }),
      getLocalizedValue: (label: string) => label,
      subscribe: (callback: () => void) => {
        const interval = setInterval(callback, 10000);
        return () => clearInterval(interval);
      },
    }),
  },
};
