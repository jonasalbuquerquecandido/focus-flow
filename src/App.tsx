import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container';
import { Sidebar } from './components/Sidebar';

export function App() {
    return (
        <>
        <Container>
            <Sidebar />
        </Container>
        </>
    );
}