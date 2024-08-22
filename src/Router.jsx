import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';

const RouterComponent = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
            </Routes>
        </Router>
        
        </>
    )
}

export default RouterComponent;