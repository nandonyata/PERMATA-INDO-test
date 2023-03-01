import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';
import { baseUrl } from '../store/actionType';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    const obj = {
      ...formRegister,
      [name]: value,
    };

    setFormRegister(obj);
  };

  const submitRegister = (e) => {
    e.preventDefault();

    fetch(baseUrl + '/register', {
      method: 'POST',
      body: JSON.stringify(formRegister),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Something went wrong!');
        return response.json();
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Success register, please login!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5"></p>

                    <form onSubmit={submitRegister}>
                      <div className="form-outline form-white mb-4">
                        <input required onChange={changeHandler} value={formRegister.name} name="name" type="text" className="form-control form-control-lg" placeholder="Name . . . " />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input required onChange={changeHandler} value={formRegister.phoneNumber} name="phoneNumber" type="text" className="form-control form-control-lg" placeholder="Phone Number . . . " />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input required onChange={changeHandler} value={formRegister.email} name="email" type="email" className="form-control form-control-lg" placeholder="Email . . . " />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input required onChange={changeHandler} value={formRegister.username} name="username" type="text" className="form-control form-control-lg" placeholder="Username . . . " />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input required onChange={changeHandler} value={formRegister.password} name="password" type="password" className="form-control form-control-lg" placeholder="Password . . . " />
                      </div>

                      <button className="btn btn-outline-light btn-lg px-5 w-100" type="submit">
                        Sign Up
                      </button>
                    </form>
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have an account?{' '}
                      <a href="#!" onClick={() => navigate('/login')} className="text-white-50 fw-bold">
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
