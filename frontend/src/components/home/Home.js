import React from 'react';
import { Typography, Button, List, ListItem, ListItemIcon, Grid } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ResponsiveAppBar from '../navbar/Navbar';

function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={2} style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <img 
            src='task-list.svg' 
            alt='task-app' 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              height: 'auto',
              display: 'block',
              margin: '0 auto'
            }} 
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6} style={{ padding: '20px'}}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Discover Our Solution
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 2, fontSize: '1.1rem' }}>
            Professional-grade technology designed to boost productivity.
          </Typography>

          <List>
            {['Feature One', 'Feature Two', 'Feature Three'].map((feature, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <Typography variant="body1">{feature}</Typography>
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: '1rem'
            }}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;