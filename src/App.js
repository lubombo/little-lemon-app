import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header><Header /></header>
      <nav><Nav /></nav>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <footer><Footer /></footer>
    </>
  );
}

export default App;
