import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p class="text-white-50 mb-5"></p>

                    <div class="form-outline form-white mb-4">
                      <input type="text" class="form-control form-control-lg" placeholder="Name . . . " />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="text" class="form-control form-control-lg" placeholder="Phone Number . . . " />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="email" class="form-control form-control-lg" placeholder="Email . . . " />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="text" class="form-control form-control-lg" placeholder="Username . . . " />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input type="password" class="form-control form-control-lg" placeholder="Password . . . " />
                    </div>

                    <button class="btn btn-outline-light btn-lg px-5 w-100" type="submit">
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p class="mb-0">
                      Already have an account?{' '}
                      <a href="#!" onClick={() => navigate('/login')} class="text-white-50 fw-bold">
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
