import React from 'react';
import { Story as MetaStory, Meta } from '@storybook/react';
import { WithCanvasDecorator } from '../../../../../.storybook/decorators';
import { Checkbox, CheckboxProps } from '../check-box';

const wrapper = {
  background: 'white',
  padding: '5px',
};

export default {
  title: 'Application/common components/Checkbox/Checkbox',
  component: Checkbox,
  decorators: [(Story: MetaStory) => (
    <WithCanvasDecorator wrapper={wrapper}>
      <Story />
    </WithCanvasDecorator>
  )],
} as Meta;

const Template = (args: CheckboxProps) => (<Checkbox {...args} />);

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const WithLabel = Template.bind({});
export const Checked = Template.bind({});
export const NoProps = Template.bind({});

Default.args = {
  label: 'label',
  checked: true,
  onChange: () => { },
};

Disabled.args = {
  label: 'label',
  checked: true,
  disabled: true,
  onChange: () => { },
};

WithLabel.args = {
  label: 'label',
};

Checked.args = {
  checked: true,
};
