import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Hero Image',
  height: '400px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Hero Image',
  height: '400px',
  disabled: true,
};
