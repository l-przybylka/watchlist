import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <AccountBoxIcon />,
        label: 'Profile',
        route: 'profile'
    },
    {
        id: 1,
        icon: <TheaterComedyIcon />,
        label: 'Your lists',
        route: 'lists'
    },
    {
        id: 2,
        icon: <LogoutIcon />,
        label: 'Logout',
        route: 'logout'
    }
]

// FIND ICONS HERE: https://mui.com/material-ui/material-icons/