import { CSSProperties, Fragment, PropsWithChildren } from 'react';

import { IRow } from './IRow';
import { HrefTargetBlank } from '.';
import Util from './Util';

export function CommonDescriptions({
  descriptions,
  option,
}: PropsWithChildren<{
  descriptions: IRow.Description[];
  option?: { padding?: boolean };
}>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description) => {
            return (
              <Fragment key={Util.getUniqueKey()}>
                <Description description={description} />
                {description.descriptions ? (
                  <DescriptionRecursion descriptions={description.descriptions} />
                ) : (
                  ''
                )}
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description) => {
        return (
          <Fragment key={Util.getUniqueKey()}>
            <Description description={description} key={Util.getUniqueKey()} />
            {description.descriptions ? (
              <DescriptionRecursion
                descriptions={description.descriptions}
                key={Util.getUniqueKey()}
              />
            ) : (
              ''
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;
  return (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return (
      <>
        <meta name="format-detection" content="telephone=no" />
        <li style={getFontWeight(weight)}>{content}</li>
      </>
    );
  })();
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
