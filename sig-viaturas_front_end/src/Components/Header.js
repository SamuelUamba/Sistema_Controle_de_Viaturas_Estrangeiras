import { Nav, Navbar, Container,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import{GrUserAdmin,GrUserManager} from 'react-icons/gr'
import{FiSettings} from 'react-icons/fi'
import {BiLogOutCircle,BiLogInCircle} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'

function Header() {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"> <AiFillCar size='5rem' /> Módulo SGVE-01</Navbar.Brand>
                <Nav className="me-auto navbar_warapper">
                    <Link to="/add_vehicle">ENTRADA</Link>
                    <Link to="/update_Data_vehicle">ACTUALIZAR</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>

                </Nav>
                <Nav >
                <GrUserManager size='2rem' color='red'/>
                    <NavDropdown  title="User: " id="basic-nav-dropdown">
                        
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><BiLogInCircle size='2rem' color='green'/> LogIn</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><BiLogOutCircle size='2rem' color='red'/> LogOut</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> <GrUserManager size='2rem'/> My Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><FiSettings size='2rem'/> Administration</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>

    )
}
export default Header