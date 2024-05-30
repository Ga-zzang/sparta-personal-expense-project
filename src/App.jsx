import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import './App.css'

function App() {
  return (
        <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
          path="/detail" 
          element={<div>여기는 지출 디테일 페이지 입니다.</div>} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
