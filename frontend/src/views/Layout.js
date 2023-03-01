import '../Layout.css';
import Container from 'react-bootstrap/esm/Container';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {/* <Container style={{ padding: 0, marginLeft: 65 }}> */}
        <Container>
          <Outlet />
        </Container>
      </div>
      <nav className="main-menu fixed-top">
        {/* <ul>
          <li>
            <a href="#" onClick={() => console.log('terkelikkk')}>
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i className="fa fa-book fa-2x"></i>
              <span className="nav-text">Add Task</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-cogs fa-2x"></i>
              <span className="nav-text">Add Category</span>
            </a>
          </li>
        </ul> */}

        <ul className="logout">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                navigate('/login');
              }}
            >
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
