import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Invoices from './pages/Invoices';
import Sidebar from './components/Sidebar';
import { Box, CssBaseline } from '@mui/material';

const App: React.FC = () => {
    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <Box component="main" sx={{ flexGrow: 1, bgcolor: 'white', p: 3, minHeight: '100vh' }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/invoices" element={<Invoices />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
