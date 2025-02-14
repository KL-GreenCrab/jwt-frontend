import React, { useState } from 'react';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Thay thế useHistory bằng useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await authService.authenticateAndGetToken(username, password);
            localStorage.setItem('token', token);
            navigate('/home'); // Redirect to home after login
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
                <Typography variant="h5" align="center">Login</Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <Typography color="error" variant="body2">{error}</Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
                        <Grid item>
                            <Button 
                                onClick={() => navigate('/register')}
                                variant="text"
                            >
                                Don't have an account? Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default LoginForm;
