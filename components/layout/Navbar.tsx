import Link from "next/link"
import SideBar from "./SideBar"
import { useCookies } from "react-cookie"
import {useEffect, useState} from "react"

const Navbar = () => {
    const [cookies, setCookie] = useCookies()
    const [mounted, setMounted] = useState()

    useEffect(() => {
        // @ts-ignore
        setMounted(true)
        // @ts-ignore
        return () => setMounted(false)
    }, []);

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        Inicio
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {(mounted && !cookies.auth_status) &&
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Usuario
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link style={{ textDecoration: 'none' }} href="/login">
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
                                </>
                            }
                            {(mounted && cookies.auth_status) &&
                                <li className="nav-item">
                                    <div className="offcanvas-header">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                                aria-controls="offcanvasExample">
                                            <i className="bi bi-list"></i>
                                            Menú
                                        </button>
                                    </div>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <SideBar />
        </>
    )
}

export default Navbar