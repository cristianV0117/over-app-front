import Link from "next/link";

const Navbar = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Usuario
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link style={{ textDecoration: 'none' }} href={'login'}>
                                    <li className="dropdown-item">Ingresar</li>
                                </Link>
                                <li><a className="dropdown-item" href="#">Registrarme</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Repositorio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Api</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar