import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import Util from '../common/Util';

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
  const log = Util.debug('Component');
  log(payload.disableLevel);
  const levelInfo = () => {
    if (payload.disableLevel) {
      return '';
    }
    return (
      <div>
        <span style={{ paddingRight: 10 }}>3: Advanced</span>
        <span style={{ paddingRight: 10 }}>2: Intermediate</span>
        <span style={{ paddingRight: 10 }}>1: Beginner</span>
      </div>
    );
  };
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
            {levelInfo()}
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow
            key={index.toString()}
            skill={skill}
            index={index}
            disableLevel={payload.disableLevel}
          />
        ))}
      </EmptyRowCol>
    </div>
  );
}
