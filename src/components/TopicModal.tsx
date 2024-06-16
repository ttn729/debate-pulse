// TopicModal.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

interface TopicModalProps {
    open: boolean;
    onClose: () => void;
    setNumTeams: (numTeams: string) => void;
    setTopicName: (topicName: string) => void;
    setNumSeconds: (numSeconds: string) => void;
}

const TopicModal = ({ open, onClose, setNumTeams, setTopicName, setNumSeconds }: TopicModalProps) => {
    const [topicNameInput, setTopicNameInput] = useState<string>('');
    const [numTeamsInput, setNumTeamsInput] = useState<string>('');
    const [timeInput, setTimeInput] = useState<string>('');

    const handleClose = () => {
        onClose();
    };

    const handleSave = () => {
        setNumTeams(numTeamsInput);
        setTopicName(topicNameInput);
        setNumSeconds(timeInput)
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <h2 id="modal-title">Enter Topic Details</h2>
                <TextField
                    fullWidth
                    label="Topic Name"
                    value={topicNameInput}
                    onChange={(e) => setTopicNameInput(e.target.value)}
                    sx={{ mt: 2, mb: 2}}
                />
                <TextField
                    fullWidth
                    label="Time (seconds)"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                    sx={{ mb: 2}}
                />
                {/* <TextField
                    fullWidth
                    type="number" 
                    label="Number of Teams"
                    value={numTeamsInput}
                    onChange={(e) => setNumTeamsInput(e.target.value)}
                    sx={{ mb: 2 }}
                /> */}
                <Button onClick={handleSave} variant="contained" sx={{ mr: 2 }}>Save</Button>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
            </Box>
        </Modal>
    );
};

export default TopicModal;
