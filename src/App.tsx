import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Sidebar } from './components/Sidebar';
import { Heading } from './components/Heading';
import { Hero } from './components/Hero';

export function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <Heading />
        <Hero />
      </Container>
    </>
  );
}
