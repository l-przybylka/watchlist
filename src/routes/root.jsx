import Navbar from '../components/Navbar/Navbar'
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <p>if logged in show navbar</p>
            <Navbar />

            <p>if not logged in show below:</p>
            <h1>log in</h1>
            <h1>register</h1>
            <Outlet />
        </>
    )
}