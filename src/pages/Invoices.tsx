import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Invoices: React.FC = () => {
    // Sample invoice data for demonstration
    const invoices = [
        { id: 'INV-001', amount: 250, status: 'Paid' },
        { id: 'INV-002', amount: 150, status: 'Pending' },
        { id: 'INV-003', amount: 300, status: 'Overdue' }
    ];

    return (
        <Container maxWidth="sm" sx={{ bgcolor: 'white', p: 4, mt: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" gutterBottom>
                Invoices
            </Typography>

            {invoices.map((invoice) => (
                <Paper key={invoice.id} sx={{ p: 2, my: 1 }}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography>{invoice.id}</Typography>
                        <Typography>${invoice.amount}</Typography>
                        <Typography color={invoice.status === 'Overdue' ? 'error.main' : 'success.main'}>
                            {invoice.status}
                        </Typography>
                    </Box>
                </Paper>
            ))}
        </Container>
    );
};

export default Invoices;
