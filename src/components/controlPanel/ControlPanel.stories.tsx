import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ControlPanel from './ControlPanel';
import '../../index.css';

const withMaxWidthContainer = (Story: any) => (
  <div style={{ margin: '0 auto', maxWidth: '900px' }}>
    <Story/>
  </div>
);

const meta = {
  title: 'Control Panel/ControlPanel',
  component: ControlPanel,
  decorators: [
    withMaxWidthContainer
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color'},
  },
  args: {
    changeSortHandler: fn(),
    changeOrderHandler: fn(),
    changePageSizeHandler: fn()
  },
} satisfies Meta<typeof ControlPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backgroundColor: "transparent",
    pageSize: 20,
    order: "desc",
    sort: "popular"
  },
};
