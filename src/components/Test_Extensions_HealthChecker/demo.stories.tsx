import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TestExtensionsHealthChecker from "./index";
import { mockReferenceData } from "./mock";

// ✅ Mock PCore for Storybook
if (!window.PCore) {
  window.PCore = {} as any;
}

(window.PCore as any).getDataPageUtils = () => ({
  getDataAsync: async () => ({
    data: mockReferenceData, // flat array expected by utils.ts
  }),
});

if (!window.PConnect) {
  window.PConnect = {
    getContextName: () => "default", // mock context name
  } as any;
}

// ✅ Default export with proper metadata
export default {
  title: "Components/TestExtensionsHealthChecker",
  component: TestExtensionsHealthChecker,
} as Meta<typeof TestExtensionsHealthChecker>;

export const Base: StoryObj<typeof TestExtensionsHealthChecker> = {
  args: {},
};
