import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import ModalTask from '../components/ModalTask';
import ModalCategory from '../components/ModalCategory';

export default function TaskList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCat, setModalCat] = useState(false);

  return (
    // <section className="vh-100" style={{ backgroundColor: '#eee' }}>
    <section className="vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  {/* <MDBCol size="12">
                    <MDBInput placeholder="Add task" type="text" />
                  </MDBCol>

                  <MDBCol size="12">
                    <Form.Select className="w-25">
                      <option>All</option>
                    </Form.Select>
                  </MDBCol> */}
                  <MDBCol size="12">
                    <button onClick={() => setModalOpen(true)} className="btn btn-primary">
                      + Task
                    </button>
                  </MDBCol>{' '}
                  <MDBCol size="12">
                    <button onClick={() => setModalCat(true)} className="btn btn-primary">
                      + Category
                    </button>
                  </MDBCol>
                </MDBRow>

                <ModalTask open={modalOpen} onClose={() => setModalOpen(false)} />

                <ModalCategory open={modalCat} onClose={() => setModalCat(false)} />

                <hr className="my-4" />

                <div style={{ paddingBottom: 10 }}>
                  <p className="small mb-0 me-2 text-muted">Filter</p>
                  <Form.Select size="sm" className="w-25">
                    <option>All</option>
                  </Form.Select>
                </div>

                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Category</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <del>Buy groceries for next week</del>
                      </td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Renew car insurance</td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          Finished
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Sign up for online course</td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          Finished
                        </MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
