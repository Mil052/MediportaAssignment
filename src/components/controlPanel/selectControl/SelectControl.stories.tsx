import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectControl from './SelectControl';
import '../../../index.css'

const withMaxWidthContainer = (Story: any) => (
  <div style={{ margin: '0 auto', padding: '1rem', maxWidth: '320px' }}>
    <Story/>
  </div>
);

const meta = {
  title: 'Control Panel/SelectControl',
  component: SelectControl,
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
} satisfies Meta<typeof SelectControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "sort by",
    options: ['activity', 'name', 'popular'],
    value: 'popular',
  },
};