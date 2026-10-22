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
  const periods = payload.list.map((item) => {
    return {
      title: item.title,
      // 종료월도 근무한 달이므로 다음 달 1일을 구간 끝으로 둔다
      endedAt: (item.endedAt
        ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local().startOf('month')
      ).plus({ month: 1 }),
      startedAt: DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    };
  });

  // 같은 회사는 첫 입사월부터 마지막 근무월까지를 재직기간으로 본다.
  // 휴직처럼 항목 사이가 비어도 근속기간에 포함되기 때문이다.
  const tenures = Object.values(
    periods.reduce<Record<string, typeof periods[number]>>((acc, cur) => {
      const prev = acc[cur.title];
      acc[cur.title] = prev
        ? {
            title: cur.title,
            startedAt: cur.startedAt < prev.startedAt ? cur.startedAt : prev.startedAt,
            endedAt: cur.endedAt > prev.endedAt ? cur.endedAt : prev.endedAt,
          }
        : { ...cur };
      return acc;
    }, {}),
  ).sort((a, b) => a.startedAt.toMillis() - b.startedAt.toMillis());

  // 회사 간 재직기간이 겹치면(겸직 등) 두 번 세지 않도록 구간을 합친다
  const merged = tenures.reduce<typeof tenures>((acc, cur) => {
    const last = acc[acc.length - 1];
    if (last && cur.startedAt <= last.endedAt) {
      last.endedAt = cur.endedAt > last.endedAt ? cur.endedAt : last.endedAt;
      return acc;
    }
    return [...acc, { ...cur }];
  }, []);

  const totalMonths = merged
    .map(({ endedAt, startedAt }) => Math.round(endedAt.diff(startedAt, 'months').months))
    .reduce((prev, cur) => prev + cur, 0);
  const totalExperience = Duration.fromObject({ months: totalMonths }).shiftTo('years', 'months');

  return totalExperience.toFormat(`총 ${Util.LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
}
