import { useCookies } from "react-cookie"
import {useEffect, useState} from "react"
const ProfileComponent = () => {
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
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar perfil</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group fw-bold">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Nombre
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder={ (mounted && cookies.user_name) && cookies.user_name }  />
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Email
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder={  (mounted && cookies.email) && cookies.email  }  />
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Roles del usuario
                                    <ul>
                                    {
                                        cookies.rol?.map((value: any) => (

                                            <li>
                                                <h5>
                                                    <span className="badge bg-success rounded-pill">{ value[1] }</span>
                                                </h5>
                                            </li>

                                        ))
                                    }
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Editar Roles</button>
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-outline-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileComponent