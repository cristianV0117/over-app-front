import Login from "../components/auth/Login"

const login = () => {
    return (
        <>
            <Login API={process.env.API} DOMAIN_API={process.env.DOMAIN_API} />
        </>
    )
}

export default login