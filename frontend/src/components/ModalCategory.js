import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { fetchCategory } from '../store/actionCreator';
import { baseUrl } from '../store/actionType';

export default function ModalCategory(props) {
  const { open, onClose } = props;
  const dispatch = useDispatch();

  const [formModalCat, setFormModalCat] = useState({
    name: '',
  });

  const changeHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    const obj = {
      name: value,
    };

    setFormModalCat(obj);
  };

  const submitModal = (e) => {
    e.preventDefault();
    // console.log(formModalCat);

    fetch(baseUrl + '/categories', {
      method: 'POST',
      body: JSON.stringify(formModalCat),
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Something went wrong!');
        return response.json();
      })
      .then((res) => {
        // console.log(res);
        setFormModalCat({ name: '' });
        dispatch(fetchCategory());
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitModal}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category Name</Form.Label>
              <Form.Control onChange={changeHandler} value={formModalCat.name} name="name" type="text" placeholder="Enter a name . . . " autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitModal}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
