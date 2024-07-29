import { PropsWithChildren } from 'react';

import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { CommonSection } from '../common/CommonSection';

import { IOpenSource } from './IOpenSource';
import { OpenSourceRow } from './row';

type Payload = IOpenSource.Payload;

export const OpenSource = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="OPEN SOURCE">
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
}
