import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

function Buy() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{color: 'white'}}
            >
                Buy 
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Buy</MenuItem>
                <MenuItem onClick={handleClose}>Rent/PG</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Commercial</MenuItem>
            </Menu>
        </div>
    );
}

const options = [
    'Projects',
    "All Residential",
    "Commercial Properties"
];

function SearchMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper' }}
            >
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    style={{ height: '30px', padding: '0', minWidth: '200px' }} // Match height and remove padding
                >
                    <ListItemText
                        secondary={options[selectedIndex]}
                        style={{ margin: '0' }} // Remove margin
                    />
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
                PaperProps={{ style: { maxHeight: 200, width: '200px' } }} // Adjust width as needed
                style={{ paddingLeft: 10 }} // Remove padding
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        style={{ height: '45px', padding: '0 8px' }} // Adjust padding and height
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

function Header() {
    return (
        <div>
            <style>
                {`
                .navbar {
                    top: 0;
                    background-color: #091330;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 10px;
                    cursor: pointer;
                }
                .navbar img {
                    max-width: 150px;
                    height: auto;
                }
                .search {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    margin: 0 10px;
                }
                .search input[type="search"] {
                    padding: 10px;
                    height: 45px; /* Match this height with SearchMenu */
                    flex: 1;
                    border: 1px solid #ccc;
                    font-size: 16px;
                }
                .search button {
                    color: white;
                    margin-left: 10px;
                    border-radius: 4px;
                }
                .icon {
                    text-align: center;
                    align-items: center;
                    display: flex;
                    color: white;
                    flex-direction: column;
                    margin:12;
                }
                .icon p {
                    margin: 0;
                    color: white;
                }
                .iconTxt{
                    font-size:20
                }
                /* Responsive Design */
                @media (max-width: 768px) {
                    .navbar {
                        flex-direction: column;
                        align-items: center;
                    }
                    .search {
                        width: 100%;
                        margin: 10px 0;
                    }
                    .search input[type="search"] {
                        width: calc(100% - 90px); /* Adjust width for button */
                        margin-right: 10px;
                    }
                    .search button {
                        width: 80px;
                        margin: 0;
                    }
                }
                @media (max-width: 480px) {
                    .navbar {
                        padding: 5px;
                        align-items: center;
                    }
                    .navbar img {
                        max-width: 120px;
                    }
                    .search {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    .search input[type="search"] {
                        margin-bottom: 10px;
                        width: 100%;
                    }
                    .search button {
                        width: 100%;
                    }
                    .icon {
                        display:none;
                    }
                }
                `}
            </style>
            <div className="navbar">
                <img src='https://static.99acres.com/universalapp/img/99acresWithTag_v2.png' alt="99acres logo"/>
                <Buy />
                <div className="search">
                    <SearchMenu />
                    <input type='search' placeholder='Type Location or Project/Society or Keyword'/>
                    <Button variant='contained' color='primary' style={{height:"45px", marginLeft:0}} >SEARCH</Button>
                </div>
                <div className="icon">
                    <CurrencyRupeeIcon />
                    <p style={{fontSize:12}}>Home Loans</p>
                </div>
                <div className="icon">
                    <AccountCircleIcon />
                    <p style={{fontSize:12}}>Dashboard</p>
                </div>
                <div className="icon">
                    <MenuIcon />
                    <p style={{fontSize:12}}>Menu</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
