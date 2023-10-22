import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* adding routes component here indicates to the package {react-router-dom} that we are starting to define our routes inside here */}
                    <Route path='/' element={<HelloComponent />}> </Route>
                    <Route path='hi' element={<div> hello </div>}> </Route>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

const HelloComponent = () => {
    return <div> This is hello from component</div>
}

export default App;
