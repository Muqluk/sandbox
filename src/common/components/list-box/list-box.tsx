import React from 'react';
import { ListBoxItem } from './list-box-item';

import './list-box.styles.scss';

export type ListBoxProps = {
  Items: Array<any>,
  IdField: string,
  DisplayField: string,
  SelectedId: number | null | undefined,
  ItemSelected: (selection: any) => void,
}

export const ListBox = ({
  Items,
  IdField,
  DisplayField,
  SelectedId,
  ItemSelected
}: ListBoxProps) => {
  const containerClass = `container${Items && Items.length > 0 ? '' : ' empty-list-items'}`;
  return (
    <div className="basic-list-box">
      <div className={containerClass}>
        {Items?.map((item: any) => (
          <ListBoxItem
            key={item.id}
            item={item}
            idField={IdField}
            displayField={DisplayField}
            selected={item.id === SelectedId}
            handleSelection={ItemSelected}
          />
        ))}
      </div>
    </div>
  );
};
