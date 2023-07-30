import { Routes, Route, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <h1>Header</h1>
            <Outlet />
            <h2>Footer</h2>
        </>
    )
}

export default Layout;