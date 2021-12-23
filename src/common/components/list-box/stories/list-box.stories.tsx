import React from 'react';
import { Story as MetaStory, Meta } from '@storybook/react';
import Chance from 'chance';
import { WithCanvasDecorator } from '../../../../../.storybook/decorators';
import { ListBox, ListBoxProps } from '../list-box';

const chance = new Chance();

const wrapper = {
  background: 'white',
  padding: '5px',
};

export default {
  title: 'Application/common components/ListBox/ListBox',
  component: ListBox,
  decorators: [(Story: MetaStory) => (
    <WithCanvasDecorator wrapper={wrapper}>
      <Story />
    </WithCanvasDecorator>
  )],
} as Meta;
const Template = (args: ListBoxProps) => (<ListBox {...args} />);

export const Expected = Template.bind({});
export const Empty = Template.bind({});

const generateList = (amount: number): ListBoxProps['Items'] => {
  const Items: ListBoxProps['Items'] = [];

  for (let i = 0; i <= amount; i++) {
    Items.push({
      id: i,
      name: chance.word({ length: chance.integer({ min: 5, max: 25 }) }),
    });
  }

  return Items;
};

Expected.args = {
  Items: generateList(25),
  SelectedId: 3,
  ItemSelected: () => { },
  IdField: 'id',
  DisplayField: 'name',
};
