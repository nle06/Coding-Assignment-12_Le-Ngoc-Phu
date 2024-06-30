import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    </tbody>
  ),
};
