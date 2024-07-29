import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import DownloadApp from './pages/download-app/DownloadApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/styles.css'
import { useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
import UserNotFound from './pages/user-not-found/UserNotFound';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",

};
function App() {
  const { loading } = useSelector(
    (state) => state.profileState
  );
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect when the component is unmounted or loading changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);
  return (
    <>
      {
        loading && (
          <div className='loader'>
            <HashLoader loading={true} color="#dfc9ed"
              cssOverride={override}
              size={150}

            />
          </div>
        )
      }
      <div className='main-wrapper'>

        <div>
          <Header className="header-section" />
          <Routes>
            <Route path="/" element={<DownloadApp />} />
            <Route path="/home" element={<DownloadApp />} />
            <Route path="/portfolio/:username" element={<Home/>} />
            <Route path="/user-not-found" element={<UserNotFound/>} />

            </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
