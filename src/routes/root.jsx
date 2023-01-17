import Navbar from '../components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import axios from 'axios';


const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/The%20Godfather',
    params: {exact: 'true', startYear: '1970', endYear: '1975'},
    headers: {
      'X-RapidAPI-Key': '039f663e8amsh6666f23f330d58dp15d469jsn5b2400dd7f50',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

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