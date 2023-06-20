import { Meta, StoryFn } from "@storybook/react";
import NewButton from "./newButton";

export default {
  component: NewButton,
  title: "Components/NewButton", // story 이름
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // 추가
    componentSubtitle: "NewButton 타이틀입니다~",
    docs: {
      description: {
        // 추가
        component: `NewButton 설명입니다~`,
      },
    },
  },
  argTypes: {
    size: {
      description: "버튼의 크기를 설정합니다.",
      table: {
        type: { summary: "SpacingVariant" },
      },
    },
    label: {
      description: "버튼의 문구를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as Meta<typeof NewButton>;

const Template: StoryFn<typeof NewButton> = (args) => <NewButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "small",
}; // Small의 props 지정

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "large",
}; // Large의 props 지정
