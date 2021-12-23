import React from 'react';
import { Story as MetaStory, Meta } from '@storybook/react';
import { WithCanvasDecorator } from '../../../../../.storybook/decorators';
import { ListBoxItem, ListBoxItemProps } from '../list-box-item';


export default {
  title: 'Application/common components/ListBox/ListBoxItem',
  component: ListBoxItem,
  decorators: [(Story: MetaStory) => (
    <WithCanvasDecorator>
      <Story />
    </WithCanvasDecorator>
  )],
} as Meta;

const Template = (args: ListBoxItemProps) => (<ListBoxItem {...args} />);

export const NotSelected = Template.bind({});
export const Selected = Template.bind({});
export const UndefinedItemError = Template.bind({});
export const MissingIdFieldError = Template.bind({});
export const MissingDisplayFieldError = Template.bind({});
export const IncorrectIdFieldError = Template.bind({});
export const IncorrectDisplayFieldError = Template.bind({});

NotSelected.args = {
  item: { id: 1, name: 'Clean House' },
  idField: 'id',
  displayField: 'name',
  selected: false,
};

Selected.args = {
  item: { id: 1, name: 'Mow the yard' },
  idField: 'id',
  displayField: 'name',
  selected: true,
};

UndefinedItemError.args = {
  idField: 'id',
  displayField: 'name',
  selected: true,
};
MissingIdFieldError.args = {
  item: { id: 1, name: 'Mow the yard' },
  displayField: 'name',
  selected: true,
};
MissingDisplayFieldError.args = {
  item: { id: 1, name: 'Mow the yard' },
  idField: 'id',
  selected: true,
};
IncorrectIdFieldError.args = {
  item: { id: 1, name: 'Mow the yard' },
  idField: 'userId',
  displayField: 'name',
  selected: true,
};
IncorrectDisplayFieldError.args = {
  item: { id: 1, name: 'Mow the yard' },
  idField: 'id',
  displayField: 'displayName',
  selected: true,
};
