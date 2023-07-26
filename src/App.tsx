import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";


function App() {
    return (
        <div className="App">
            <Header />
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
