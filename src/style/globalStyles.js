import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
  font-family: 'Assistant', sans-serif;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
button {
  font-family: 'Assistant', sans-serif;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: 2px solid transparent;
  }
}
strong {
  font-weight: bold;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

/* Animations */
.slide-enter,
.slide-enter-active,
.slide-exit,
.slide-exit-active {
  transition: transform 1000ms ease-in-out;
}

.next .slide-enter {
  transform: translateY(100%);
}

.prev .slide-enter {
  transform: translateY(-100%);
}

.next .slide-enter-active,
.prev .slide-enter-active {
  transform: translateY(0%);
}

.next .slide-exit,
.prev .slide-exit {
  transform: translateY(0%);
}

.prev .slide-exit-active {
  transform: translateY(100%);
}

.next .slide-exit-active {
  transform: translateY(-100%);
}
`;

export default GlobalStyles;
