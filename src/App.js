import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RoomsComponent from "./components/RoomsComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (<div>
            <BrowserRouter>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {RoomsComponent}/>
                        <Route path = "/api/rooms" component = {RoomsComponent}/>
                    </Switch>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
