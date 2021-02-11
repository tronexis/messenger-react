import styled, { ThemeProvider } from "styled-components/macro";
import * as $ from "./Styles/Styles";
import Sidebar from "./Sidebar/Sidebar";
import ThreadsPanel from "./Sidebar/ThreadsPanel";

const Messenger = (props) => {
  return (
    <ThemeProvider theme={$.theme}>
      <Container>
        <Sidebar />
        <ThreadsPanel />
        <$.Box flex="7">
          <$.Box>Thread</$.Box>
          <$.Box>ThreadAside</$.Box>
        </$.Box>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 2rem);
  padding: 1rem;
  background: ${({ theme }) => theme.color.bg[1]};

  & > div {
    margin: 0;
    margin-right: 1rem;

    &:last-child {
      margin: 0;
    }
  }
`;

export default Messenger;
