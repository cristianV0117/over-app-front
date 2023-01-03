import {NextResponse} from "next/server"

const middleware = async (request?: any) => {

    const jwt = request.cookies.get("jwt")

    if (request.nextUrl.pathname.includes('/admin')) {
        if (undefined === jwt) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    if (request.nextUrl.pathname.includes('/login')) {
        if (undefined != jwt) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
    }


    return NextResponse.next()
}

export default middleware