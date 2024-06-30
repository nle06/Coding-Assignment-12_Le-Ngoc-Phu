import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a text component',
};
