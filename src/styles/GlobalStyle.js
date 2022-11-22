import { createGlobalStyle } from 'styled-components';
import BarlowThin from '../fonts/Barlow-Thin.ttf';
import BarlowLight from '../fonts/Barlow-Light.ttf';
import BarlowRegular from '../fonts/Barlow-Regular.ttf';
import BarlowSemiBold from '../fonts/Barlow-SemiBold.ttf';
import BarlowBold from '../fonts/Barlow-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Barlow';
    src: url(${BarlowLight});
    font-weight: 300;
}
@font-face {
    font-family: 'Barlow';
    src: url(${BarlowThin});
    font-weight: 100;
}
@font-face {
    font-family: 'Barlow';
    src: url(${BarlowSemiBold});
    font-weight: 600;
}
@font-face {
    font-family: 'Barlow';
    src: url(${BarlowBold});
    font-weight: 700;
}
@font-face {
    font-family: 'Barlow';
    src: url(${BarlowRegular});
    font-weight: 400;
}
:root {
    /* CSS HEX */
    --snow: #faf7f9ff;
    --lavender-blush: #f3e8eeff;
    --queen-pink: #ebd9e3ff;
    --thistle: #dcbcceff;
    --pink-lavender: #d2a8beff;
    --opera-mauve: #c082a4ff;
    --mulberry: #ad5c89ff;
    --twilight-lavender: #88446aff;
}
:root {
    --fluid-min-width: 320;
    --fluid-max-width: 1360;
  
    --fluid-screen: 100vw;
    --fluid-bp: calc(
      (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
        (var(--fluid-max-width) - var(--fluid-min-width))
    );
}
:root {
    --f--1-min: 13.33;
    --f--1-max: 19.20;
    --step--1: calc(
      ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
        var(--fluid-bp)
    );
  
    --f-0-min: 16.00;
    --f-0-max: 24.00;
    --step-0: calc(
      ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
        var(--fluid-bp)
    );
  
    --f-1-min: 19.20;
    --f-1-max: 30.00;
    --step-1: calc(
      ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
        var(--fluid-bp)
    );
  
    --f-2-min: 23.04;
    --f-2-max: 37.50;
    --step-2: calc(
      ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
        var(--fluid-bp)
    );
  
    --f-3-min: 27.65;
    --f-3-max: 46.88;
    --step-3: calc(
      ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
        var(--fluid-bp)
    );
}

* {
    box-sizing: border-box;
    padding: 0 0;
    margin: 0 0;
    font-family: 'Barlow', sans-serif;
}
body {
    /* overflow-x: hidden; */
    font-size: var(--step-0);
    width: 100%;
}
ul {
    list-style: none;
}
a, a:visited {
    text-decoration: none;
    color: unset;
}
h1 {
    padding: 0 0 0 20px;
    /* font-size: max(2.2vw,28px); */
    font-size: var(--step-2);
    text-align: center;
    margin-top: 3vw;
    font-weight: 600;
    letter-spacing: -1px;
}
`;
