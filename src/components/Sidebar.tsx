import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Box, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight, Dashboard, UploadFile, Receipt, Menu } from '@mui/icons-material';

const drawerWidth = 240; // Expanded width
const collapsedWidth = 70; // Collapsed width

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => setOpen(!open);

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? drawerWidth : collapsedWidth,
                    transition: 'width 0.3s', // Smooth resizing animation
                    overflowX: 'hidden', // Prevent content overflow
                    boxSizing: 'border-box',
                }
            }}
        >
            {/* Sidebar Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
                {open && <Typography variant="h6">MyAppTest05</Typography>}
                <IconButton onClick={toggleDrawer}>
                    {open ? <ChevronLeft /> : <Menu />}
                </IconButton>
            </Box>

            <Divider />

            {/* Navigation Links */}
            <List>
                {/* Dashboard */}
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        {open && <ListItemText primary="Dashboard" />}
                    </ListItemButton>
                </ListItem>

                {/* Upload Page */}
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/upload">
                        <ListItemIcon>
                            <UploadFile />
                        </ListItemIcon>
                        {open && <ListItemText primary="Upload" />}
                    </ListItemButton>
                </ListItem>

                {/* Invoices Page */}
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/invoices">
                        <ListItemIcon>
                            <Receipt />
                        </ListItemIcon>
                        {open && <ListItemText primary="Invoices" />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
