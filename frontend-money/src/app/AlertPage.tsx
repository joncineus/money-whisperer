import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

const AlertPage: React.FC = () => {
    const [purchaseDecision, setPurchaseDecision] = useState<string | null>(null);

    const handleDecision = (decision: string) => {
        setPurchaseDecision(decision);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Purchase Alert
            </Typography>
            <Typography variant="body1" gutterBottom>
                Was this purchase a good decision?
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleDecision('good')}
                style={{ marginRight: '10px' }}
            >
                Good
            </Button>
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleDecision('bad')}
            >
                Bad
            </Button>
            {purchaseDecision && (
                <Typography variant="h6" style={{ marginTop: '20px' }}>
                    You decided this purchase was: {purchaseDecision}
                </Typography>
            )}
        </Container>
    );
};

export default AlertPage;