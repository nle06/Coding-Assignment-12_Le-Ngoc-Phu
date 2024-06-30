import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    name: { control: 'text' },
    options: { control: 'object' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'radioGroup',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'radioGroup',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  disabled: true,
};
