import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    document.body.style = 'background: #BDE1DD';

    return (
        <>
            <div>AuthLayout</div>
            <Outlet />
        </>
    )
}

export default AuthLayout
