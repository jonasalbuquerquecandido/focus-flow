import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Sidebar } from './components/Sidebar';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <Heading />
      </Container>w
    </>
  );
}
