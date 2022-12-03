import { Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Loader from './components/Loader';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Profile = lazy(() => import('./pages/Profile'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />
        <Route path="/signin" element={
          <PublicRoutes>
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
          </PublicRoutes>
        } />
        <Route path="/signup" element={
          <PublicRoutes>
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          </PublicRoutes>
        } />
        <Route path="/profile" element={
          <PrivateRoutes>
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          </PrivateRoutes>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
