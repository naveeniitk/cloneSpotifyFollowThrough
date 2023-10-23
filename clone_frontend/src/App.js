import logo from './logo.svg';
import './App.css';
import './output.css'
import LoginComponent from './routes/Login'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Routes>
                    {/* adding routes component here indicates to the package {react-router-dom} that we are starting to define our routes inside here */}
                    <Route path='/' element={<HelloComponent />}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                </Routes> 
            </BrowserRouter>
        </div>
    );
}

const HelloComponent = () => {
    return <div> This is hello from component</div>
}

export default App;
