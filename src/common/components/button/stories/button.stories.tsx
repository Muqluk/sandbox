import React from 'react';
import { Story as MetaStory, Meta } from '@storybook/react';
import { WithCanvasDecorator } from '../../../../../.storybook/decorators';
import { Button, ButtonProps } from '../button';

const wrapper = {
  background: 'white',
  padding: '5px',
};

export default {
  title: 'Application/common components/Button/Button',
  component: Button,
  decorators: [(Story: MetaStory) => (
    <WithCanvasDecorator wrapper={wrapper}>
      <Story />
    </WithCanvasDecorator>
  )],
} as Meta;
const Template = (args: ButtonProps) => (<Button {...args} />);

export const DefaultProps = Template.bind({});
export const WithProps = Template.bind({});
export const Disabled = Template.bind({});

WithProps.args = {
  text: 'Save',
};
Disabled.args = {
  text: 'Save',
  disabled: true,
};
