import { Meta, StoryFn, StoryObj } from "@storybook/react";

import Task from "./task.component";

import taskStore from "../store/taskStore";

export default {
  // component: Task,
  title: "Components/Task",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // 추가
    componentSubtitle: "Task 타이틀입니다~",
    docs: {
      description: {
        // 추가
        component: `Task 설명입니다~`,
      },
    },
  },
  argTypes: {
    task: {
      description: "task props에는 id, title, state가 존재합니다.",
    },
    id: {
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      table: {
        type: { summary: "string" },
      },
    },
    state: {
      table: {
        type: { summary: "SpacingVariant" },
      },
    },
  },
  decorators: [(Story) => <div style={{ margin: "3em" }}>{Story()}</div>],
} as Meta<typeof Task>;

const Template: StoryFn<typeof Task> = (args) => <Task {...args} />;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
  render: () => {
    const state = taskStore();
    return <Task {...state} />;
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  task: {
    id: 2,
    title: "Test Task2",
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  ...Default.args,
  task: {
    id: 3,
    title: "Test Task3",
    state: "TASK_ARCHIVED",
  },
};
