import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ConversionWidgets from './components/shared/ConversionWidgets';
import ExitIntent from './components/shared/ExitIntent';
import AppRoutes from './routes';
import { useExitIntent } from './hooks/useExitIntent';

function AppContent() {
  const { showExitIntent, dismiss } = useExitIntent();

  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ConversionWidgets />
      <ExitIntent show={showExitIntent} onDismiss={dismiss} />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
