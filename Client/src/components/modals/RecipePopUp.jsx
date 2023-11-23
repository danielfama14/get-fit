import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
const RecipeModal = () => {
    // set modal display state
    const [showModal, setShowModal] = useState(false);
    // fetch data here
    return (
        <>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='recipe-modal'>
                <Tab.Container defaultActiveKey='recipe'>
                    <Modal.Header closeButton>
                        <Modal.Title id='recipe-modal'>
                            <h1>FIND YOUR FAVORITE RECIPES</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='recipe'>
                                <RecipeForm handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>

    )
}

export default RecipeModal;