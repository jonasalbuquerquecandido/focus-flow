import './styles/theme.css';
import './styles/global.css';
import app from './App.module.css'

import { Dashboard } from './pages/DashboardPage';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div className={app.app}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}
