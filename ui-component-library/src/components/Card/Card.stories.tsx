import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageSrc: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  imageSrc: 'https://via.placeholder.com/400x200',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  imageSrc: 'https://via.placeholder.com/400x200',
  disabled: true,
};
