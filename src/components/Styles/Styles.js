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
  width: ${(props) => props.w || "95%"};
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

export const Boxes = ({ x, Box }) =>
  Array(x)
    .fill(0)
    .map((_, i) => <Box key={i} />);

export const Flex = css`
  display: flex;
`;

export const container = css`
  display: flex;
`;

export const colSpacing = (x) => css`
  & > div {
    margin: 0;
    margin-bottom: ${x}rem;

    &:last-child {
      margin: 0;
    }
  }
`;

export const rowSpacing = (x) => css`
  & > div {
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

export const col = (x) => css`
  display: flex;
  flex-direction: column;
  ${colSpacing(x)}
`;

export const row = (x) => css`
  display: flex;
  ${rowSpacing(x)}
`;

export const theme = {
  color: {
    1: primaryColor,
    2: bgColor,
    font: {
      1: "#fff",
      2: tint(0.3),
    },
    bg: {
      1: bgColor,
      2: lighten(0.05),
    },
    icon: {
      1: lighten(0.25),
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
    col: (x) => col(x),
    row: (x) => row(x),
  },
};
