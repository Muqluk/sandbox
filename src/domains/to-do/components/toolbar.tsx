import React from 'react';
import { Button } from '@common/components/button/button';
import { IToolbarProps } from '../types';
import './component.styles.scss';

export const Toolbar = ({ fetchToDoList, isLoading, loadingErrors }: IToolbarProps) => (
  <div className="toolbar">
    <Button onClick={fetchToDoList} text="Load ToDo List" />
    {isLoading && (<div className="loading">Loading, please wait...</div>)}
    {loadingErrors && (<div className="error">{loadingErrors}</div>)}
  </div>
);
