import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export { Layout }