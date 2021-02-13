import styled, { css } from "styled-components/macro";
import * as $ from "polished";
import * as color from "@material-ui/core/colors";

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) =>
      (props.col && "column") || (props.row && "row") || "row"}${(props) =>
      props.reverse && "-reverse"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  background: ${({ nobg }) => (nobg && "#fff0") || "#fff1"};
  border-radius: 1rem;
  color: #000;
  width: ${(props) => props.w || "100%"};
  ${(props) => props.wmax && `max-width: ${props.wmax};`}
  margin: 0.5rem;
  flex: ${(props) => props.flex || 0};
  overflow-y: ${(x) => (x.scroll && "scroll") || "visible"};
  /* flex-flow: column nowrap; */

  &::-webkit-scrollbar {
    display: none;
  }

  &-cool {
    color: green;
  }
`;

export const Boxes = ({ x, content }) =>
  Array(parseInt(x))
    .fill(0)
    .map((_, i) => <Box key={i}>{content}</Box>);

export const Flex = css`
  display: flex;
`;

export const container = css`
  display: flex;
`;

export const colSpacing = (x) => css`
  & > * {
    margin: 0;
    margin-bottom: ${x}rem;

    &:last-child {
      margin: 0;
    }
  }
`;

export const rowSpacing = (x) => css`
  & > * {
    margin: 0;
    margin-right: ${x}rem;

    &:last-child {
      margin: 0;
    }
  }
`;

export const VContainer = css`
  ${container}
  flex-direction: column;
  ${"" /* align-items: center; */}

  ${colSpacing(1)}
`;

export const HContainer = css`
  ${container}
  ${rowSpacing(1)}
`;

export const primaryColor = $.mix(0.95, color.indigo.A400, "#fff");
export const bgColor = $.mix(0.2, primaryColor, "#111");
export const font = {
  color: {
    1: "#fff",
    2: $.tint(0.3, bgColor),
  },
};
export const lighten = (amount) => $.lighten(amount, bgColor);
export const tint = (amount) => $.tint(amount, bgColor);

export const fullflex = css`
  display: flex;
  flex: 1;
`;

const borderSize = "0.1";

export const col = (space, border) => css`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 0;
    border-bottom: ${border ? borderSize : 0}rem solid ${tint(0.1)};
    margin-bottom: ${space}rem;

    &:last-child {
      border: 0;
      margin: 0;
    }
  }
`;

export const colReverse = (space, border) => css`
  display: flex;
  flex-direction: column-reverse;

  & > * {
    margin: 0;
    border-bottom: ${border ? borderSize : 0}rem solid ${tint(0.1)};
    margin-bottom: ${space}rem;

    &:first-child {
      border: 0;
      margin: 0;
    }

    &:last-child {
      border: 0;
      margin-top: ${space}rem;
    }
  }
`;

export const row = (space, border) => css`
  display: flex;

  & > * {
    margin: 0;
    border-right: ${border ? borderSize : 0}rem solid ${tint(0.1)};
    margin-right: ${space}rem;

    &:last-child {
      border: 0;
      margin: 0;
    }
  }
`;

export const rowReverse = (space, border) => css`
  display: flex;
  flex-direction: row-reverse;

  & > * {
    margin: 0;
    border-right: ${border ? borderSize : 0}rem solid ${tint(0.1)};
    margin-right: ${space}rem;

    &:first-child {
      border: 0;
      margin: 0;
    }
  }
`;

export const theme = {
  color: {
    1: primaryColor,
    2: bgColor,
    font: {
      1: "#fff",
      2: tint(0.4),
    },
    bg: {
      1: bgColor,
      2: lighten(0.05),
    },
    icon: {
      1: lighten(0.35),
      2: tint(0.3),
    },
    badge: {
      1: "#f00",
      2: primaryColor,
    },
  },
  container: {
    H: HContainer,
    V: VContainer,
  },
  spacing: {
    col: (x) => colSpacing(x),
    row: (x) => rowSpacing(x),
  },
  flex: {
    center: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    full: fullflex,
    col: (...args) => col(...args),
    colReverse: (...args) => colReverse(...args),
    row: (...args) => row(...args),
    rowReverse: (...args) => rowReverse(...args),
  },
};

theme["text"] = {
  title: css`
    margin-block: 0;
    color: ${theme.color.font[1]};
  `,
  subtitle: css`
    margin-block: 0;
    color: ${theme.color.font[2]};
  `,
};

theme["btn"] = {
  icon: css`
    ${({ theme }) => theme.flex.center}
    color: ${({ theme }) => theme.color.icon[1]};
    font-weight: 600;
    font-size: 1.5rem;
    background: none;
    padding: 0;
    border: 0;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.font[1]};
    }
  `,
};

theme["input"] = css`
  display: flex;
  flex: 1;
  background: none;
  color: ${({ theme }) => theme.color.font[1]};
  border: 0;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: ${({ theme }) => theme.color.font[2]};
  }
`;
