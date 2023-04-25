import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header';

const PrincipalLayout = () => {
    document.body.style = 'background: #FFFFFF';

    return (
        <>
            {/* <Header />
            <Sidebar /> */}
            <div>PrincipalLayout</div>
            <Outlet />
        </>
    )
}

export default PrincipalLayout