import React from 'react';
import { Toolbar } from '../toolbar';

export default {
  title: 'Examples/Redux/components/Toolbar',
  component: Toolbar
};

const Template = (args: any) => (<Toolbar {...args} />);

export const InitialState = Template.bind({});
