import {React, useState} from 'react';
import './votes.css';

function Votes() {
    const [countRuby, setCountRuby] = useState(0);
    const [countIzzy, setCountIzzy] = useState(0);
    const [countCheerio, setCountCheerio] = useState(0);

    function incrementRuby() {
        setCountRuby(countRuby+1)
    }

    function incrementIzzy() {
        setCountIzzy(countIzzy+1)
    }
    
    function incrementCheerio() {
        setCountCheerio(countCheerio+1)
    }

    return(
        <div id='counter'>
            <h1>Who do you vote for?</h1>
            <button onClick={incrementRuby}>Vote for Ruby</button>
            <button onClick={incrementIzzy}>Vote for Izzy</button>
            <button onClick={incrementCheerio}>Vote for Cheerio</button>
            <h3>Ruby: {countRuby}, Izzy: {countIzzy}, Cheerio: {countCheerio}</h3>
        </div>
    );
}

export default Votes