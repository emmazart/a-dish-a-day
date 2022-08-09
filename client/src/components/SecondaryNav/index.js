import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import secondNavStyles from './nav.module.css';
// import AdbIcon from '@mui/icons-material/Adb';
import { color } from '@mui/system';
import Auth from '../../utils/auth';

const pages = [
    { name: "View Recipes", link: "/recipes" },
    { name: "About", link: "/about" },
];

let settings = [];

const SecondaryNav = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    if (!Auth.loggedIn()) {
    settings = [
    { name: 'Login', link: "/login" },
    { name: 'Sign Up', link: "/signup" },
  ]
    } else {
        settings = [
            { name: 'Profile', link: "/profile" },
            { name: 'Dashboard', link: "/dashboard" },
            // { name: 'Logout', link: "/" },
        ];
    };

    const handleLogout = (e) => {
        console.log('logging out');
        Auth.logout();
    };

    return (
        <AppBar
            position="fixed"
            // elevation={0}
            style={{
                backgroundColor: "white",
                color: "red",
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            component="span"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#BB9316',
                                textDecoration: 'none'
                            }}
                        >
                            A Dish A Day
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon 
                            color='default'
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link} to={page.link}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 3, color: 'black', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <MenuIcon alt="Remy Sharp" src="/static/images/avatar/2.jpg"
                                    sx={{
                                        color: 'default',
                                        backgroundColor: '#BB9316',
                                        
                                    }} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ 
                                mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} component={Link} to={setting.link} onClick={handleCloseUserMenu}
                                    style={{
                                        backgroundColor: 'white'
                                    }}>
                                    <Typography
                                        // textAlign="center"
                                        color='textSecondary'
                                        letterSpacing='.1rem'
                                    >
                                        {setting.name}</Typography>
                                </MenuItem>
                            ))}
                            {Auth.loggedIn() ? 
                                ( <MenuItem key='logout' onClick={handleLogout}
                                style={{
                                backgroundColor: 'white'
                                }}>
                                <Typography
                                // textAlign="center"
                                color='textSecondary'
                                letterSpacing='.1rem'
                                >
                                Logout</Typography>
                                </MenuItem> ) : ''
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default SecondaryNav;
