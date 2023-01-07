const SideBar = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start shadow"  id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <div className="fs-4 mb-2 mt-3">
                        <button type="button" className="btn btn-outline-success">
                            <i className="bi bi-house-door-fill"></i>
                            Menú
                        </button>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <hr />
                <div className="offcanvas-body">
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                <i className="bi bi-house m-2"></i>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark">
                                <i className="bi bi-speedometer m-2"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark">
                                <i className="bi bi-people-fill m-2"></i>
                                Usuarios
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown mt-3">
                        <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-bs-toggle="dropdown">
                            <i className="bi bi-person-circle m-2"></i>
                            Perfil
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Editar perfil</a></li>
                            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar