import React from 'react';
import { Story as MetaStory, Meta } from '@storybook/react';
import { WithCanvasDecorator } from '../../../../../.storybook/decorators';
import { TextInput, TextInputProps } from '../text-input';

const wrapper = {
  background: 'white',
  padding: '5px',
};

export default {
  title: 'Application/common components/TextInput/TextInput',
  component: TextInput,
  decorators: [(Story: MetaStory) => (
    <WithCanvasDecorator wrapper={wrapper}>
      <Story />
    </WithCanvasDecorator>
  )],
} as Meta;


const Template = (args: TextInputProps) => (<TextInput {...args} />);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const WithLabel = Template.bind({});
export const WithValue = Template.bind({});
export const NoProps = Template.bind({});

Default.args = {
  label: 'label',
  value: 'value',
  onChange: () => { },
};

Disabled.args = {
  label: 'label',
  value: 'value',
  disabled: true,
  onChange: () => { },
};

WithLabel.args = {
  label: 'label',
};

WithValue.args = {
  value: '404 N Main Street',
};
