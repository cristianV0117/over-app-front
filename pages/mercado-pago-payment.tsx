import {useEffect} from "react"
//import { useMercadopago } from 'react-sdk-mercadopago'
const MercadoPagoPayment = () => {

    /*const mp = useMercadopago.v2('TEST-9e56c48d-9f39-470b-b101-4c2f4b64b658', {
        locale: 'en-US'
    });*/

    /*useEffect(() => {
        if (mp) {
            mp.checkout({
                preference: {
                    id: '555279991-a8e36599-d611-4f35-92fa-3874633f8ee9'
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                }
            })
        }
    }, [mp])*/

    return (
        <>
            <div className="cho-container"/>
        </>
    )
}

export default MercadoPagoPayment