import { CSSProperties } from 'react';

type TStyleKey =
  | 'globalFont'
  | 'blue'
  | 'gray'
  | 'sign'
  | 'box'
  | 'downloadBtn'
  | 'toolTip'
  | 'skillKeywordBadge'
  | 'footerCover';

export const Style: Record<TStyleKey, CSSProperties> = {
  globalFont: {
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },
  blue: {
    color: '#3c78d8',
  },
  gray: {
    color: 'gray',
  },
  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },
  box: {
    width: '100%',
    height: '100%',
    // marginBottom: '104px',
    display: 'flex',
    justifyContent: 'center',
  },
  downloadBtn: {
    bottom: '54px',
    right: '43px',
    position: 'fixed',
    width: '140px',
    height: '50px',
    borderRadius: '50px',
    fontSize: '18px',
    zIndex: 1000,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'linear-gradient(to right, #3c78d8, #44c8d9)',
    border: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolTip: {
    display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    fontStyle: 'italic',
    color: 'gray',
  },
  skillKeywordBadge: {
    fontWeight: 400,
  },
  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },
};
