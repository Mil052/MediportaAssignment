import type { Meta, StoryObj } from '@storybook/react';
import TagsTable from './TagsTable';

const Tags = [
  {count: 2528908, name: "javascript"},
  {count: 2192301, name: "python"},
  {count: 1917363, name: "java"},
  {count: 1615010, name: "c#"},
  {count: 1464464, name: "php"},
  {count: 1417251, name: "android"},
  {count: 1187394, name: "html"},
  {count: 1034851, name: "jquery"}, 
  {count: 806745, name: "c++"},
]

const withMaxWidthContainer = (Story: any) => (
  <div style={{ margin: '1rem auto', maxWidth: '900px' }}>
    <Story/>
  </div>
);

const meta = {
  title: 'Data State/TagsTable',
  component: TagsTable,
  decorators: [
    withMaxWidthContainer
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: Tags,
  },
};
