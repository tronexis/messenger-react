import styled, { ThemeProvider } from "styled-components/macro";
import * as $ from "./Styles";
import SidePanel from "./SidePanel/SidePanel";
import FullThreadPanel from "./FullThreadPanel/FullThreadPanel";

const Messenger = (props) => {
  return (
    <ThemeProvider theme={$.theme}>
      <Container>
        <SidePanel />
        <FullThreadPanel />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.flex.row(0, true)}
  height: 100vh;
  background: ${({ theme }) => theme.color.bg[1]};
`;

export default Messenger;
