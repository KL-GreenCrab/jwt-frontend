import React, { useEffect, useState } from 'react';
import { userService } from '../services/userService';
import { Container, Typography, CircularProgress, Card, CardContent, CardActions, Button, Divider } from '@mui/material';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Unauthorized');

                const userData = await userService.getUserProfile(token);
                setUserInfo(userData);
            } catch (err) {
                setError('Error fetching user profile');
            }
        };

        fetchUserProfile();
    }, []);

    if (!userInfo) {
        return (
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress /> {/* Hiển thị loading spinner */}
            </Container>
        );
    }

    // Xử lý hiển thị roles nếu roles không phải mảng
    const rolesDisplay = Array.isArray(userInfo.roles) ? userInfo.roles.join(', ') : 'N/A';

    return (
        <Container maxWidth="md" style={{ marginTop: '30px', padding: '20px' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center" color="primary">
                        User Profile
                    </Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="subtitle1" gutterBottom align="center">
                        <strong>Username:</strong> {userInfo.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align="center">
                        <strong>Email:</strong> {userInfo.email}
                    </Typography>
                    <Typography variant="subtitle1" align="center">
                        <strong>Roles:</strong> {userInfo.roles}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => window.location.href = '/home'} 
                    >
                        Back to Home
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default UserProfile;
