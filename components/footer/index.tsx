import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div className="text-center mt-4">
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" />
              {' / '}
              Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
