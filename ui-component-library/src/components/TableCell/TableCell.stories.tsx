import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableCell from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
} as Meta<typeof TableCell>;

const Template: StoryFn<typeof TableCell> = (args) => <TableCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Cell Content',
};