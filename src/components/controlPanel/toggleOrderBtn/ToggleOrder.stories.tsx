import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ToggleOrderBtn from './ToggleOrderBtn';

const meta = {
  title: 'Control Panel/ToggleOrderBtn',
  component: ToggleOrderBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof ToggleOrderBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'asc',
  },
};