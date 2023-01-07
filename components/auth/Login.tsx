import React from "react"
import loginImage from 'assets/login.jpg'
import Image from "next/image"
import {useState} from "react"
import request from "../../core/request"
import { useCookies } from "react-cookie"
import Router from "next/router"
import swal from 'sweetalert2'
import ForgotPassword from "./ForgotPassword";
import Swal from "sweetalert2";

interface Props {
    API?: string,
    DOMAIN_API?: string
}

const Login: React.FC<Props> = ({...Props}) => {

    const [user_name, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [authCookie, setAuthCookie] = useCookies(["jwt"])
    const [authUserCookie, setUserCookie] = useCookies([
        "id",
        "user_name",
        "email",
        "rol_id",
        "rol",
        "auth_status"
    ])

    const validator = (
        credentials: any
    ) => {
        if ('' != credentials.password && credentials.password.length < 4) {
            return {
                "element": "password",
                "status": false,
                "message": "La contraseña debe tener al menos 5 caracteres"
            }
        }

        return {
            "element": null,
            "status": true,
            "message": "OK"
        }
    }

    const onSubmitHandler = (event?: any) => {
        event.preventDefault()

        let dataRequest = {
            'user_name': user_name,
            'email': user_name,
            'password': password
        }

        let responseValidator = validator(dataRequest)

        if (!responseValidator.status) {
            swal.fire({
                title: '¡Oh no! 😔',
                html: responseValidator.message,
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false
            }).then(r => true)
            return
        }

        Swal.fire({
            title:`<div class="spinner-border text-primary"></div>`,
            scrollbarPadding: false,
            showConfirmButton: false
        }).then(r => true)

        // @ts-ignore
        request('login', dataRequest, "POST").then(response => {
            Swal.hideLoading()
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
                title: `Bienvenido ${response.message.user_name} 😀`,
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            }).then(r => true)
            setCookies(response)
            setTimeout(() => {
                Router.push('admin/dashboard').then(r => true)
            }, 1800)
        })
    }

    const setCookies = (response: any) => {
        setAuthCookie("jwt", response.message.jwt)
        setUserCookie("id", response.message.id)
        setUserCookie("user_name", response.message.user_name)
        setUserCookie("email", response.message.email)
        setUserCookie("rol_id", response.message.roles.id)
        setUserCookie("rol", response.message.roles.name)
        setUserCookie("auth_status", true)
    }

    return (
        <div className="container col-md-12 mt-3">
            <div className="card shadow-lg">
                <div className="row">
                    <div className="col-md-6">
                        <Image
                            src={loginImage}
                            alt="login"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6 mt-5 default text-center">
                        <div className="col-md-10 mt-5 mr-4">
                            <p className='text-center h4'>Ingresa &#x1F642;</p>
                            <form onSubmit={onSubmitHandler} className="mt-4 needs-validation">
                                <label><h5>Tu email o nombre de usuario</h5></label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input
                                        id="user"
                                        name="user_name"
                                        placeholder="usuario..."
                                        type="text"
                                        className="form-control shadow"
                                        onChange={e => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                                <label className="mt-2"><h5>Contraseña</h5></label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="contraseña..."
                                        type="password"
                                        className="form-control shadow"
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <small id="passwordDangerMessage" className="text-danger">

                                </small>
                                <div className="mt-4">
                                    <button type="submit" className="btn btn-outline-primary shadow" >Ingresar</button>
                                    <button onClick={ForgotPassword} type="button" className="btn btn-outline-warning m-2 shadow" >Olvidé mi contraseña</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login