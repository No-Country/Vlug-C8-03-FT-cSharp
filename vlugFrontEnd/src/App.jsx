import { Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Loader from './components/Loader';

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Profile = lazy(() => import('./pages/Profile'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        } />
        <Route path="/signin" element={
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
        } />
        <Route path="/signup" element={
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
        } />
        <Route path="/profile" element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
        } />
      </Routes>
    </>
  );
}

export default App;
