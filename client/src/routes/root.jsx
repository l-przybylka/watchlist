import Navbar from '../components/Navbar/Navbar'
import { Outlet, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Root() {
    const navigate = useNavigate()  
    return (
        <>
            <Grid item xs={12} md={8}>
                <p>if logged in show navbar</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <p>if not logged in show below:</p>
            </Grid>
            <Grid item xs={12} md={8}>
                <Button onClick={() => navigate('register')} variant="contained">
                    Login
                </Button>
                <Button onClick={() => navigate('login')} variant="contained">
                    Register
                </Button>
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