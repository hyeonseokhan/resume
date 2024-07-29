import { PropsWithChildren } from 'react';

import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { CommonSection } from '../common/CommonSection';

import { IProject } from './IProject';
import ProjectRow from './row';

type Payload = IProject.Payload;

export const Project = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
