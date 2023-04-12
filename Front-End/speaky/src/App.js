import './App.css';
import ResultPage from './components/ResultPage';
import HomeComponent from './components/HomeComponent';
import WorkingPage from './components/WorkingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const str1 = "She walked along the beach feeling the warm sand between her toes and the cool water lapping at her feet. The sun was shining brightly in the clear blue sky, and she could hear the seagulls calling overhead. It was a perfect day, and she felt grateful to be alive and able to enjoy it. She closed her eyes and took a deep breath, savoring the salty air and the peacefulness of the moment."
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>}/>
            <Route path="/workingPage" element={<WorkingPage/>}></Route>
            <Route path="/resultPage" element={<ResultPage string={str1}/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
