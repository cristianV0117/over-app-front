import swal from 'sweetalert2'

const request = (endPoint: string, data: any, type: string, auth?: string) => {
    try {
        if ("GET" === type) {

        }

        if ("POST" === type) {
            return fetch(process.env.DOMAIN_API + endPoint, {
                method: type,
                headers: {
                    'Authorization': process.env.API ? process.env.API : '',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(json => {
                return json.json()
            }).catch(error => {
                swal.fire(
                    '¡Oh no! 😔',
                    'Ha ocurrido un error en la aplicación, intenta mas tarde',
                    'error'
                )
                return
            })
        }
    } catch (error) {
        swal.fire(
            '¡Oh no! 😔',
            '',
            'error'
        )
    }
}

export default request