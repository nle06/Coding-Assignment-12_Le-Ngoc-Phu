import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableHeader from './TableHeader';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
} as Meta<typeof TableHeader>;

const Template: StoryFn<typeof TableHeader> = (args) => <TableHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  ),
};
