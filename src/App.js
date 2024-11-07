import React from 'react';
import Button from './components/Button'
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


function App(){


    const handleClick = () => {
        console.log('Clicked me!')
    }

    return <div>
        <div><Button onClick={handleClick} primary rounded outline className="mb-5"><GoBell /> Hi there!</Button></div>
        <div><Button secondary rounded outline><GoCloudDownload /> Hi there!</Button></div>
        <div><Button success rounded outline><GoDatabase /> Hi there!</Button></div>
        <div><Button warning rounded outline> Hi there!</Button></div>
        <div><Button danger rounded outline>Hi there!</Button></div>
    </div>;
}

export default App;
