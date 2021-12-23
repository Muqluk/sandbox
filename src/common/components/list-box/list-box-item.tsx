/*
  eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions
*/
import React, { useEffect, useState } from 'react';
import './list-box.styles.scss';

type Item = {
  [key: string]: string | number
}

export type ListBoxItemProps = {
  item: Item,
  idField: string,
  displayField: string,
  selected: boolean,
  handleSelection: (item: any) => void;
}

type InvalidProperty = {
  property: string,
  value: string,
  message: string,
};

export const ListBoxItem = ({
  item,
  idField,
  displayField,
  selected,
  handleSelection
}: ListBoxItemProps) => {
  const itemCssClass = selected ? 'basic-list-item item selected' : 'basic-list-item item';
  const errorCssClass = 'basic-list-item error';

  const [invalidProps, setInvalidProps] = useState<InvalidProperty[]>([]);

  useEffect(() => {
    const newInvalidProps: InvalidProperty[] = invalidProps;

    if (!idField) {
      newInvalidProps.push({
        property: 'idField',
        value: typeof idField,
        message: `Invalid property:  ListBoxItem[idField]: ${typeof idField}`,
      });
    }
    if (!displayField) {
      newInvalidProps.push({
        property: 'displayField',
        value: typeof displayField,
        message: `Invalid property:  ListBoxItem[displayField]: ${typeof displayField}`,
      });
    }

    if (item) {
      if (idField && !item[idField]) {
        newInvalidProps.push({
          property: 'idField',
          value: idField,
          message: `Invalid idField in ListBoxItem::ListBoxItem.item[${idField}] is undefined`,
        });
      }
      if (displayField && !item[displayField]) {
        newInvalidProps.push({
          property: 'displayField',
          value: displayField,
          message: `Invalid displayField in ListBoxItem::ListBoxItem.item[${displayField}] is undefined`,
        });
      }
    }
    if (newInvalidProps.length > 0) {
      setInvalidProps(newInvalidProps);
    }
  }, [item, idField, displayField]);

  const handleClick = () => {
    handleSelection(item);
  };

  if (item && (!idField || !item[idField])) {
    return (
      <div className={errorCssClass}>
        <span>{`idField: ${idField} not find in Item`}</span>
      </div>
    );
  }

  if (item && (!displayField || !item[displayField])) {
    return (
      <div className={errorCssClass}>
        <span>{`displayField: ${displayField} not find in Item`}</span>
      </div>
    );
  }

  if (!item) {
    return (
      <div className={errorCssClass}>
        <span>{`invalid ListBoxItem: ${typeof item}`}</span>
      </div>
    );
  }

  const key = item[idField];
  const text = item[displayField];

  return (
    <div
      key={key}
      className={itemCssClass}
      onClick={handleClick}
    >
      <span>{text}</span>
    </div>
  );
};
