import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ErrorInfoBox from './ErrorInfoBox';

const meta = {
  title: 'Data State/ErrorInfoBox',
  component: ErrorInfoBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    resetPage: fn(),
  },
} satisfies Meta<typeof ErrorInfoBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error("An error occurred. Can't get tags data from Stack Exchange.")
  },
};
