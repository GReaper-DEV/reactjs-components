import Modal from '../components/Modal';
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false);



    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>This is a text for the modal!</Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    );

}

export default ModalPage;