import { Loader } from './index'

const props = {
  theme: 'white'
}

export default {
  title: 'UI Kit/Loader',
  component: Loader,
}

const Template = (args) => <Loader { ...args } />

export const Dark = Template.bind({})

Dark.args = {
  ...props,
}

export const White = Template.bind({})

White.args = {
  ...props,
  theme: 'dark'
}