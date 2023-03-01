import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from '../store/actionCreator';
import { baseUrl } from '../store/actionType';

export default function ModalTask(props) {
  const { open, onClose } = props;
  const dispatch = useDispatch();

  const dataCategories = useSelector((state) => state.categories);

  const [formModal, setFormModal] = useState({
    name: '',
    categoryName: 'Groceries',
  });

  const changeHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    const obj = {
      ...formModal,
      [name]: value,
    };

    setFormModal(obj);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formModal);

    fetch(baseUrl + '/tasks', {
      method: 'POST',
      body: JSON.stringify(formModal),
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
        setFormModal({ name: '', categoryName: '' });
        dispatch(fetchTask());
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control value={formModal.name} onChange={changeHandler} name="name" type="text" placeholder="Enter a name . . . " autoFocus />
            </Form.Group>

            <Form.Select onChange={changeHandler} name="categoryName" size="sm" className="w-25">
              {dataCategories.map((el) => {
                return (
                  <option key={el.name} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitHandler}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
