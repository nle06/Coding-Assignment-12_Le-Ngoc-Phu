import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableRow from './TableRow';

export default {
  title: 'Components/TableRow',
  component: TableRow,
} as Meta<typeof TableRow>;

const Template: StoryFn<typeof TableRow> = (args) => <TableRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </>
  ),
};
