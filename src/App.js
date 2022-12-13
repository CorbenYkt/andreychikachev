import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index path='first' element={<Home />}></Route>
            <Route path='second' element={<About />}></Route>
            <Route path='third' element={<Profile />}></Route>
            <Route path='*' element={<NotFound />} ></Route>
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
