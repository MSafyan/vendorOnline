import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './routes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginProvider from './contexts/LoginContext';

dayjs.extend(relativeTime);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <QueryClientProvider client={queryClient}>
        <LoginProvider>
          <BrowserRouter>
            <Header />
            <div className="flex flex-1 flex-col">
              <Router />
            </div>
            <Footer />
          </BrowserRouter>
          <ToastContainer />
        </LoginProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
