import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Upload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            alert(`File "${selectedFile.name}" uploaded successfully!`);
            setSelectedFile(null); // Clear file after upload
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ bgcolor: 'white', p: 4, mt: 4, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h4" gutterBottom>
                Upload Files
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
                <input
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="file-upload"
                />
                <label htmlFor="file-upload">
                    <Button variant="outlined" component="span" fullWidth>
                        Choose File
                    </Button>
                </label>

                {selectedFile && (
                    <Typography color="text.secondary">
                        Selected file: {selectedFile.name}
                    </Typography>
                )}

                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleUpload}
                    fullWidth
                >
                    Upload
                </Button>
            </Box>
        </Container>
    );
};

export default Upload;
