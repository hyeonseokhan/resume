import { DateTime, Duration } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';
import ExperienceRow from './row';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  const periods = payload.list
    .map((item) => {
      return {
        // 종료월도 근무한 달이므로 다음 달 1일을 구간 끝으로 둔다
        endedAt: (item.endedAt
          ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
          : DateTime.local()
        ).plus({ month: 1 }),
        startedAt: DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
      };
    })
    .sort((a, b) => a.startedAt.toMillis() - b.startedAt.toMillis());

  // 기간이 겹치는 항목(겸임 등)을 두 번 세지 않도록 구간을 합친 뒤 더한다
  const merged = periods.reduce<typeof periods>((acc, cur) => {
    const last = acc[acc.length - 1];
    if (last && cur.startedAt <= last.endedAt) {
      last.endedAt = cur.endedAt > last.endedAt ? cur.endedAt : last.endedAt;
      return acc;
    }
    return [...acc, { ...cur }];
  }, []);

  const totalExperience = merged
    .map(({ endedAt, startedAt }) => endedAt.diff(startedAt))
    .reduce((prev, cur) => prev.plus(cur), Duration.fromMillis(0));

  return totalExperience.toFormat(`총 ${Util.LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
}
