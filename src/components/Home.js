import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    CardActions,
} from '@mui/material';

const Home = () => {
    const handleNavigate = (path) => {
        window.location.href = path; // Điều hướng tới URL tương ứng
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Xóa token
        window.location.href = '/login'; // Điều hướng về trang login
    };

    return (
        <div>
            {/* Thanh AppBar chỉ chứa tiêu đề */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" style={{ marginTop: '30px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Welcome to Our Platform
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                    Explore other features or securely log out.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Card for User Information */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    User Information
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    View your personal information.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => handleNavigate('/userProfile')}
                                >
                                    View Profile
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                    {/* Card for Get All Users */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Get All Users
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    View a list of all registered users.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => handleNavigate('/userList')}
                                >
                                    View Users
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Card for Logout */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Logout
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Securely log out of your account.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="secondary"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;
