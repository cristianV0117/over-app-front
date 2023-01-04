import { useRouter} from "next/router"
import ResetPasswordComponent from "../../../components/auth/ResetPasswordComponent"

const ResetPassword = () => {
    const router = useRouter()
    const { param } = router.query

    let email = ''
    if (undefined != param) {
        // @ts-ignore
        email = Buffer.from(param, 'base64').toString()
    }

    return <ResetPasswordComponent PARAM={email} />
}

export default ResetPassword