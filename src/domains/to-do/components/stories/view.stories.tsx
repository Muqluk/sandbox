import React from 'react';
import { ToDoView } from '../view';

export default {
  title: 'Examples/Redux/ToDoView',
  component: ToDoView,
};

const Template = (args: any) => (<ToDoView {...args} />);

export const InitialState = Template.bind({});
