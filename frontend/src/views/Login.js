import React, { useState } from 'react';
import '../Login.css';
import { baseUrl } from '../store/actionType';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const changeHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    const obj = {
      ...formLogin,
      [name]: value,
    };

    setFormLogin(obj);
  };

  const submitLogin = (e) => {
    e.preventDefault();

    fetch(baseUrl + '/login', {
      method: 'POST',
      body: JSON.stringify(formLogin),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // console.log(data.message, '<<<');
          setError(data.message);
          throw new Error(data.message);
        }
        if (data.access_token) {
          localStorage.access_token = data.access_token;
          navigate('/');
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                    <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                    <p className="text-white-50 mb-5"></p>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <form onSubmit={submitLogin}>
                      <div className="form-outline form-white mb-4">
                        <input onChange={changeHandler} value={formLogin.email} name="email" type="email" className="form-control form-control-lg" placeholder="Email . . ." />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input onChange={changeHandler} value={formLogin.password} name="password" type="password" className="form-control form-control-lg" placeholder="Password . . ." />
                      </div>

                      <button className="btn btn-outline-light btn-lg px-5 w-100" type="submit">
                        Sign In
                      </button>
                    </form>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{' '}
                      <a href="#!" onClick={() => navigate('/register')} className="text-white-50 fw-bold">
                        Sign Up
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
