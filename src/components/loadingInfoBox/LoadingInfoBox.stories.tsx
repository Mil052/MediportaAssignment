import type { Meta, StoryObj } from '@storybook/react';
import LoadingInfoBox from './LoadingInfoBox';

const meta = {
  title: 'Data State/LoadingInfoBox',
  component: LoadingInfoBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingInfoBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
