import './App.css';
import ResultPage from './components/ResultPage';
import HomeComponent from './components/HomeComponent';
import WorkingPage from './components/WorkingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  const str1 = "She walked along the beach feeling the warm sand between her toes and the cool water lapping at her feet. The sun was shining brightly in the clear blue sky, and she could hear the seagulls calling overhead. It was a perfect day, and she felt grateful to be alive and able to enjoy it. She closed her eyes and took a deep breath, savoring the salty air and the peacefulness of the moment."
  const [paragraphText, setParagraphText] = useState('')
  const [str2, setstr2] = useState("")

  const handleParagraphChange = (e) => {
    setParagraphText(e.target.value)
    console.log('first')
  }

  console.log(paragraphText)
  console.log("str2 ",str2)

  return (
    <div className="App">
      <Auth0Provider 
        domain={process.env.REACT_APP_AUTH0_DOMAIN} 
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeComponent/>}/>
            <Route path="/workingPage" element={<WorkingPage paragraphText={paragraphText} onParagraphChange={handleParagraphChange} setstr2={setstr2} str2={str2}/>}></Route>
            <Route path="/resultPage" element={<ResultPage string={str1} str2={str2}/>}></Route>
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;
