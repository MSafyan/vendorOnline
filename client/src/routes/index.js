import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import BarLoader from 'react-bar-loader';
import ProtectedRoute from './ProtectedRoute';

const Home = lazy(() => import('../screens/Home'));
const Profile = lazy(() => import('../screens/Profile'));
const PostJob = lazy(() => import('../screens/PostJob'));
const Job = lazy(() => import('../screens/Job'));
const Jobs = lazy(() => import('../screens/Jobs'));
const Chats = lazy(() => import('../screens/Chats'));

const Router = () => {
  return (
    <Suspense fallback={<BarLoader height={5} width={100} color="#00b754" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={<Profile />} />}
        />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/jobs/:id" element={<Job />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
