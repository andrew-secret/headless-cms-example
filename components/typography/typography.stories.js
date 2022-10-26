import React from 'react';
import { Typography } from './typography';

export default {
  title: 'Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'heading1',
  children: 'The crazy fox jumps over the lazy dog',
};

export const Heading1AsH3 = Template.bind({});
Heading1AsH3.args = {
  variant: 'heading1',
  level: 'h3',
  children: 'The crazy fox jumps over the lazy dog',
};

export const Heading1Center = Template.bind({});
Heading1Center.args = {
  variant: 'heading1',
  level: 'h3',
  alignment: 'center',
  children: 'The crazy fox jumps over the lazy dog',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
  children: 'The crazy fox jumps over the lazy dog',
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: 'bodySmall',
  children: 'The crazy fox jumps over the lazy dog',
};
