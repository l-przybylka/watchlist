import Navbar from '../components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';


export default function Root() {
    return (
        <>
            <Grid item xs={12} md={8}>
                <p>if logged in show navbar</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <p>if not logged in show below:</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <h1>log in</h1>
            </Grid>
            <Grid item xs={12} md={8}>
                <h1>register</h1>
            </Grid>
            <Grid item xs={12} md={8}>
                <Outlet />
            </Grid>
            <Grid item xs={12} md={8}>
                <Navbar />
            </Grid>
        </>
    )
}