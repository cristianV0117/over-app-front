import React from "react"
import {useState} from "react"
import request from "../../core/request"
import swal from "sweetalert2";
import Router from "next/router";

interface props {
    PARAM?: string
}

const ResetPasswordComponent: React.FC<props> = ({...props}) => {

    const [newPassword, setNewPassword] = useState('')

    const onSubmitHandler = (event?: any) => {
        event.preventDefault()
        // @ts-ignore
        request('forgot/reset-password', {
            "email": props.PARAM,
            "password": newPassword
        }, "PUT").then(response => {
            if (200 != response.status || response.error) {
                swal.fire({
                    title: '¡Oh no! 😔',
                    html: response.message,
                    icon: 'warning',
                    timer: 2000,
                    showConfirmButton: false
                }).then(r => true)
                return
            }

            swal.fire({
                title: `Tu contraseña ha sido actualizada ${String.fromCodePoint(0x1F600)}`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            }).then(r => true)
            setTimeout(() => {
                Router.push('/login').then(r => true)
            }, 1000)
        })
    }

    return (
        <div className="container col-md-12 position-absolute top-50 start-50 translate-middle">
            <div className="card mb-5 shadow-lg">
                <div className="col-md-10 container mt-5 mb-5">
                    <p className='text-center h5'><strong>Escribe tu nueva contraseña &#x1F642;</strong></p>
                    <form onSubmit={onSubmitHandler} className='needs-validation container col-md-8 mt-2'>
                        <input
                            type="password"
                            placeholder="Nueva contraseña"
                            className="form-control shadow"
                            required
                            onChange={e => setNewPassword(e.target.value)}
                        />
                        <div className="text-center mt-3">
                            <button className="btn btn-outline-primary shadow" >Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordComponent