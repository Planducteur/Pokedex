import React,{useState} from 'react';
import '../styles/Add.css';
import { Button,Modal } from 'react-bootstrap';

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
  );
  };

export default Add;