import Swal from "sweetalert2"
import Request from "../../core/request"
import swal from "sweetalert2";

const ForgotPassword = () => {

    const handleClick = () => {
        const login = document.getElementById('login')
        // @ts-ignore
        if ('' == login.value) {
            Swal.fire({
                title: '¡Oh no! 😔',
                html: 'El campo no puede estar vacio',
                icon: 'error',
                timer: 2000,
                showConfirmButton: false
            }).then(r => true)
            setTimeout(() => {
                ForgotPassword()
            }, 2000)
            return
        }

        // @ts-ignore
        let email = login.value
        // @ts-ignore
        Swal.fire({
            title:`<div class="spinner-border text-primary"></div>`,
            scrollbarPadding: false,
            showConfirmButton: false
        }).then(r => true)
        // @ts-ignore
        Request('forgot', {
            'email': email
        }, "POST").then(response => {
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
                title: `Hemos envíado un mail a tu bandeja de correos, revisa por favor ${String.fromCodePoint(0x1F600)}`,
                icon: 'success',
                timer: 3500,
                showConfirmButton: false
            }).then(r => true)
        })
    }

    Swal.fire({
        title:'Escribe tu correo electronico &#x1F642;',
        html: `<input type="text" id="login" class="swal2-input" placeholder="example@example.com">`,
        confirmButtonText: 'Envíar correo',
        focusConfirm: false,
        preConfirm: () => {
            handleClick()
        }
    }).then(r => true)
}

export default ForgotPassword