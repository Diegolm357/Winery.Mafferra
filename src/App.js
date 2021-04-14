import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Logo from './component/Logo';
import WidtCard from './component/WidtCard';

function App() {
    return ( < div className = "App" >

        <
        header >

        <
        div className = "logo" > < Logo / >
        <
        /div>


        <
        NavBar / >

        <
        /
        header >


        <
        WidtCard / >
        <
        /div> 
    );
}

export default App;