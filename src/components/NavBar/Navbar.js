import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import './Navbar.css';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleLogout = () => {
        // Implement your logout logic here
        // For example, redirect to the logout page or perform logout actions
        handleClosePopover();
    };

    return (
        <AppBar className='NavBar-root' position="static">
            <Toolbar>
                {/* Left side: Logo and School Name */}
                <div className="left-section">
                    <Avatar alt="Logo" src="/user-avatar.jpg" className="user-avatar" />
                    <Typography variant="h6" className="school-name">
                        School Name
                    </Typography>
                </div>

                {/* Right side: User Profile */}
                <div className="right-section">
                    <Avatar alt="User" src="/user-avatar.jpg" className="user-avatar" onClick={handleProfileClick} />
                    <Typography variant="body1" className="user-name">
                        User Profile {/* Replace with the user's name */}
                    </Typography>
                </div>

                {/* Logout Popover */}
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <div>
                        <Button onClick={handleLogout} color="primary">
                            Log out
                        </Button>
                    </div>
                </Popover>
            </Toolbar>
        </AppBar>
    );
}
