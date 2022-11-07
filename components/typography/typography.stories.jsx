import { Typography } from './typography'

const typography = {
  title: 'Typography',
  component: Typography,
}

export default typography

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Typography {...args} />
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'heading1',
  children: 'The crazy fox jumps over the lazy dog',
}

export const Heading1AsH3 = Template.bind({})
Heading1AsH3.args = {
  variant: 'heading1',
  level: 'h3',
  children: 'The crazy fox jumps over the lazy dog',
}

export const Heading1Center = Template.bind({})
Heading1Center.args = {
  variant: 'heading1',
  level: 'h3',
  alignment: 'center',
  children: 'The crazy fox jumps over the lazy dog',
}

export const Body = Template.bind({})
Body.args = {
  variant: 'body',
  children: 'The crazy fox jumps over the lazy dog',
}

export const BodySmall = Template.bind({})
BodySmall.args = {
  variant: 'bodySmall',
  children: 'The crazy fox jumps over the lazy dog',
}
