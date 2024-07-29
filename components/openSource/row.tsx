import { PropsWithChildren } from 'react';

import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRows';
import { IRow } from '../common/IRow';

import { IOpenSource } from './IOpenSource';

export function OpenSourceRow({ payload }: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function serialize(item: IOpenSource.Item): IRow.Payload {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}
