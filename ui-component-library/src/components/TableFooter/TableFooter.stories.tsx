import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TableFooter from './TableFooter';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
} as Meta<typeof TableFooter>;

const Template: StoryFn<typeof TableFooter> = (args) => <TableFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  ),
};
