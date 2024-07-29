import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col xs="auto">
            <h2>
              <span style={Style.blue}>SKILL</span>
            </h2>
          </Col>
          <Col xs="auto" style={Style.toolTip}>
            {createToolTip()}
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function createToolTip() {
  return (
    <div>
      <span style={{ paddingRight: 10 }}>3: Advanced</span>
      <span style={{ paddingRight: 10 }}>2: Intermediate</span>
      <span style={{ paddingRight: 10 }}>1: Beginner</span>
    </div>
  );
}
