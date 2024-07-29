import React, { PropsWithChildren } from 'react';
import { ICommon } from './ICommon';

type Component<T> = (props: PropsWithChildren<{ payload: T }>) => JSX.Element;

export function PreProcessingComponent<T extends ICommon.SectionEnableFlag>({
  payload,
  component,
}: {
  payload: T;
  component: Component<T>;
}) {
  if (payload?.disable) {
    return <></>;
  }

  return component({ payload });
}
