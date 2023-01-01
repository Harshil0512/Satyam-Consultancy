import { Link } from "react-router-dom";
import "./header.css"

const Header = () =>{
    return <>
            <header className="justify-content-around header position-relative py-2" style={{"zIndex" : 1}}>
                <div className="navbar navbar-expand-md align-items-center navbar-dark justify-content-around flex-wrap position-absolute top-0 w-100">
                    <div className="col-md-2 col-sm-2">
                        <div className="container my-2 text-center">
                            <Link to="/" className="navbar-brand fw-bold fs-1 text-light">
                                <img src="images/logo.png" alt="Satyam Property Consultancy Logo" className="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 d-md-none d-sm-block col-0"></div>
                    <button className="navbar-toggler col-md-0 col-2 col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-md-10 col-12 container-fluid navbarMenu">
                        <div className="collapse navbar-collapse my-2 col-12 justify-content-end" id="navbar">
                        <ul className="navbar-nav align-items-end">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item dropdown-link">
                                <Link to="Hk" className="nav-link dropdown-toggle text-end">Catagory</Link>
                                <ul className="dropdown-menu dropdown-menu-dark overflow-auto">
                                    <li>
                                        <Link to='Hk' className='dropdown-item fw-light'>Category</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Menu 3</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Menu 4</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Menu 5</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Hk" className="btn btn-md bg-dark text-light">Log in</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </header>
    </>
}

export default Header;