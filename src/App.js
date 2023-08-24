import './index.scss';
import {Routes, Route, Link} from "react-router-dom";


// pages
import {HomePage} from "./pages/HomePage/index";
import {NotFoundPage} from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import {useSelector} from "react-redux";

function App() {

  return (
    <div className="App">
      <header className="App-header">
            {/*<Link to="/">Главная</Link>*/}
          <span className="App-header__logo">Task React.js + Redux toolkit</span>
      </header>
        <Routes>
            <Route
                path="/"
                element={ <HomePage/> }
            />
            <Route
                path="/profile/:id"
                element={<ProfilePage/>}
            />
            <Route
                path="*"
                element={ <NotFoundPage/> }
            />
        </Routes>
    </div>
  );
}

export default App;
