import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AIAutomationPage from './pages/AIAutomationPage';
import ADCreativesPage from './pages/ADCreativesPage';
import DesignEventsPage from './pages/DesignEventsPage';

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/ad-creatives" element={<ADCreativesPage />} />
        <Route path="/design-events" element={<DesignEventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
