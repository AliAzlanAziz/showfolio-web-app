import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import DownloadApp from './pages/download-app/DownloadApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/styles.css'
import { useRef } from 'react';
import { HashLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",

};
function App() {
  const homeRef = useRef(null);
  const { loading } = useSelector(
    (state) => state.profileState
  );
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
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
          <Header className="header-section" scrollToSection={scrollToSection} refs={{ homeRef }} />
          <Routes>
            <Route path="/" element={<DownloadApp />} />
            <Route path="/home" element={<DownloadApp />} />
            <Route path="/portfolio/:username" element={<Home ref={homeRef} />} />
            </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
