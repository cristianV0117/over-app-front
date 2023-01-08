import ProfileComponent from "../admin/ProfileComponent"
import Link from "next/link"
import {useCookies} from "react-cookie"
import Swal from "sweetalert2"
import Router from "next/router"

const SideBar = () => {
    const [cookies, setCookie, removeCookie] = useCookies()
    const logOut = () => {
        removeCookie('auth_status' ,{path:'/'})
        removeCookie('rol_id', {path:'/'})
        removeCookie('id', {path:'/'})
        removeCookie('rol', {path:'/'})
        removeCookie('email',{path:'/'})
        removeCookie('jwt', {path:'/'})
        removeCookie('user_name', {path:'/'})

        Swal.fire('Adios', '', 'success').then(r => true)
        setTimeout(() => {
            Router.push('/').then(r => true)
        }, 1800)

    }

    return (
        <>
            <div className="offcanvas offcanvas-start shadow"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
                            <Link href="/" className="nav-link active" aria-current="page">
                                <i className="bi bi-house m-2"></i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/dashboard" className="nav-link link-dark">
                                <i className="bi bi-speedometer m-2"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark">
                                <i className="bi bi-people-fill m-2"></i>
                                Usuarios
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-dark">
                                <i className="bi bi-list-task m-2"></i>
                                Tareas
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
                            <li><a id="update-profile" data-bs-toggle="modal" data-bs-target="#exampleModal" className="dropdown-item change-canvas" href="#">Editar perfil</a></li>
                            <li><a className="dropdown-item" >Historial de ingresos</a></li>
                            <li><a onClick={logOut} className="dropdown-item" >Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ProfileComponent />
        </>
    )
}

export default SideBar