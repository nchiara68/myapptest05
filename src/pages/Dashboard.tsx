import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Dashboard: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ bgcolor: 'white', p: 4, mt: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="body1">
                Welcome to your dashboard! 🚀<br />
                Here you can access the Upload and Invoices sections using the sidebar.
            </Typography>
        </Container>
    );
};

export default Dashboard;
