import Button from '../components/Button'
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';


function ButtonPage(){


    const handleClick = () => {
    }

    return <div>
        <div><Button onClick={handleClick} primary rounded outline className="mb-5"><GoBell /> Hi there!</Button></div>
        <div><Button secondary rounded outline><GoCloudDownload /> Hi there!</Button></div>
        <div><Button success rounded outline><GoDatabase /> Hi there!</Button></div>
        <div><Button warning rounded outline> Hi there!</Button></div>
        <div><Button danger rounded outline>Hi there!</Button></div>
    </div>;
}

export default ButtonPage;
