import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #d1fae5;
    --color-green-700: #065f46;
    --color-yellow-100: #fffef9;
    --color-yellow-700: #ca8a04;
    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #b91c1c;
    --color-red-700: #fee2e2;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-grey-0: #18212f;
    --color-grey-50: #111827;
    --color-grey-100: #1f2937;
    --color-grey-200: #374151;
    --color-grey-300: #4b5563;
    --color-grey-400: #6b7280;
    --color-grey-500: #9ca3af;
    --color-grey-600: #d1d5db;
    --color-grey-700: #e5e7eb;
    --color-grey-800: #f3f4f6;
    --color-grey-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #065f46;
    --color-green-700: #d1fae5;
    --color-yellow-100: #ca8a04;
    --color-yellow-700: #fffef9;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /** PORTFOLIO THEME COLORS */
  --color-primary-1: #f7fbf9;
  --color-primary-5: #eff7f3;
  --color-primary-10: #e6f3ec;
  --color-primary-25: #d6ebe0;
  --color-primary-50: #cbe5d8;
  --color-primary-100: #c1e0d1;
  --color-primary-200: #b7dbc9;
  --color-primary-300: #acd6c1;
  --color-primary-400:  #a2d1ba;  
  --color-primary-500:  #8ac5a9; 
  --color-primary-600:  #72b999; 
  --color-primary-700:  #58ae88;
  --color-primary-800:  #3aa279;
  --color-primary-900:  #10b981;
  --color-primary-1000:  #059669;

  --color-bg-fb: #2874f0;
  --color-bg-google: #dd5354;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --asterisk-color: #f03e3e;

  /* FONT FAMILY */
  --global-font-size: 62.5%;
  --global-font-family: "Poppins", sans-serif;

  /* FONT WEIGHT */
  --fw-100: 100;
  --fw-300: 300;
  --fw-400: 400;
  --fw-500: 500;
  --fw-700: 700;
  --fw-900: 900;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: var(--global-font-size);
}

body {
  font-family: var(--global-font-family);
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
} */

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 1px solid var(--color-primary-800);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

::-webkit-scrollbar {
  width: 6px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
`;

export default GlobalStyles;
