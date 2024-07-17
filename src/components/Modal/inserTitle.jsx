import { useEffect, useState } from 'react';
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);

  const changeInput = (event) => {
    setValue(event.target.value);
  }
  const handleSubmit = (e) => {
    localStorage.setItem('tituloNovo', value);
    handleClose();
  }

  return (
    <>
      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='bg-success bg-gradient' closeButton>
            <Modal.Title className='text-light'>Título da Lista</Modal.Title>
          </Modal.Header>
          <ModalBody className='border border-dark'>
            <input
             
              type="text"
              value={value}
              className="form-control"
              placeholder="Insira um título novo"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </ModalBody>
          <Modal.Footer className='bg-success bg-gradient'>
            <Button variant="danger" onClick={handleClose}>
              Fechar
            </Button>
            <Button className='btn btn-success'>Salvar</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default Example;
