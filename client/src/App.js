import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './routes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex flex-1 flex-col">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
