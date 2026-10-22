import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          {item.positions ? (
            item.positions.map((position, positionIndex) => (
              <div key={positionIndex.toString()} className={positionIndex > 0 ? 'pt-2' : ''}>
                <i style={Style.gray}>{position.position}</i>
                {createPositionMeta(position)}
                {createDescriptions(position.descriptions, position.skillKeywords)}
              </div>
            ))
          ) : (
            <>
              <i style={Style.gray}>{item.position}</i>
              {createDescriptions(item.descriptions ?? [], item.skillKeywords)}
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

function createDescriptions(descriptions: string[], skillKeywords?: string[]) {
  return (
    <ul className="pt-3">
      {descriptions.map((description, descIndex) => (
        <li key={descIndex.toString()}>{description}</li>
      ))}
      {createSkillKeywords(skillKeywords)}
    </ul>
  );
}

function createPositionMeta(position: IExperience.Position) {
  if (!position.concurrent && !position.startedAt) {
    return '';
  }
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const format = (value: string) =>
    DateTime.fromFormat(value, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
  const period = position.startedAt
    ? `${format(position.startedAt)} ~${position.endedAt ? ` ${format(position.endedAt)}` : ''}`
    : '';

  return (
    <span className="ml-2">
      {position.concurrent ? (
        <Badge className="mr-1" style={Style.concurrentBadge}>
          겸임
        </Badge>
      ) : (
        ''
      )}
      <small style={Style.gray}>{period}</small>
    </span>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
        endedAt: undefined,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}
