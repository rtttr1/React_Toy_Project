import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  black: '#222222',
  red: '#d90429',
  yellow: '#ffc300',
  green: '#38b000',
  gray: '#e9ecef',
  lightgray: '#adb5bd',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  size: number;
  weight: number;
  height: string;
  letterSpacing: number;
}

const FONT = ({ family, weight, size, height, letterSpacing }: Font): string => {
  return `
        font-family:${family};
        font-size:${size}rem;
        font-weight:${weight};
        line-height:${height}%;
        letter-spacing: ${letterSpacing}px;
    `;
};

const fonts = {
  heading00: FONT({
    family: 'Pretendard',
    size: 3.4,
    weight: 600,
    height: '100',
    letterSpacing: -3,
  }),
  heading01: FONT({
    family: 'Pretendard',
    size: 2.4,
    weight: 600,
    height: '100',
    letterSpacing: 0,
  }),
  heading02: FONT({
    family: 'Pretendard',
    size: 2.4,
    weight: 500,
    height: '100',
    letterSpacing: 0,
  }),
  heading03: FONT({
    family: 'Pretendard',
    size: 2,
    weight: 600,
    height: '100',
    letterSpacing: 0,
  }),
  heading04: FONT({
    family: 'Pretendard',
    size: 1.8,
    weight: 600,
    height: '100',
    letterSpacing: -0.5,
  }),
  title01: FONT({
    family: 'Pretendard',
    size: 1.6,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
  title02_heavy: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  title02_middle: FONT({
    family: 'Pretendard',
    size: 1.4,
    weight: 500,
    height: '130',
    letterSpacing: 0,
  }),
  body01_heavy: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 600,
    height: '135',
    letterSpacing: 0,
  }),
  body01_middle: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 500,
    height: '135',
    letterSpacing: 0,
  }),
  body01_light: FONT({
    family: 'Pretendard',
    size: 1.3,
    weight: 400,
    height: '135',
    letterSpacing: 0,
  }),
  body02_heavy: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body02_middle: FONT({
    family: 'Pretendard',
    size: 1.2,
    weight: 500,
    height: '160',
    letterSpacing: 0.5,
  }),
  body03_heavy: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  body03_middle: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
  body03_light: FONT({
    family: 'Pretendard',
    size: 1.1,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_heavy: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 600,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_middle: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
  detail1_light: FONT({
    family: 'Pretendard',
    size: 1,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail2: FONT({
    family: 'Pretendard',
    size: 0.9,
    weight: 400,
    height: '140',
    letterSpacing: 0,
  }),
  detail3: FONT({
    family: 'Pretendard',
    size: 0.8,
    weight: 500,
    height: '140',
    letterSpacing: 0,
  }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
