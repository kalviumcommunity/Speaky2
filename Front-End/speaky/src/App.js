import './App.css';
import ResultPage from './components/ResultPage';
import HomeComponent from './components/HomeComponent';
import WorkingPage from './components/WorkingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>}/>
            <Route path="/workingPage" element={<WorkingPage/>}></Route>
            <Route path="/resultPage" element={<ResultPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
