import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Edit from './pages/Edit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className = 'pages'>
            <Routes>
              <Route path = '/'element={<Home />}> </Route>
              <Route path = '/edit/:id'element={<Edit />}> </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<Route path = '/'element={<Edit />}/>
<Route path = '/edit'element={<Edit />}> </Route>
*/
