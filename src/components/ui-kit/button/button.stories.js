import Button from './index'

const props = {
  text: 'Button',
  onClick: () => console.log('Button click'),
  disabled: false,
  theme: 'white'
}

export default {
  title: 'UI Kit/Button',
  component: Button,
}

const Template = (args) => <Button { ...args } />

export const Dark = Template.bind({})

Dark.args = {
  ...props,
}

export const White = Template.bind({})

White.args = {
  ...props,
  theme: 'dark'
}

export const Disabled = Template.bind({})

Disabled.args = {
  ...props,
  disabled: true
}