import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NumberInput from './NumberInput';
import '../../../index.css'

const withMaxWidthContainer = (Story: any) => (
  <div style={{ margin: '0 auto', padding: '1rem', maxWidth: '320px' }}>
    <Story/>
  </div>
);

const meta = {
  title: 'Control Panel/NumberInput',
  component: NumberInput,
  decorators: [
    withMaxWidthContainer
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
  },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Items per page",
    min: 0,
    max: 100,
    value: 20
  },
};