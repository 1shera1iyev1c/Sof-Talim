import { Route, Routes } from 'react-router-dom';
import { Header, Footer } from './Components'
import { Contact, Courses, Home, Login, Teachers } from './Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/password' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
