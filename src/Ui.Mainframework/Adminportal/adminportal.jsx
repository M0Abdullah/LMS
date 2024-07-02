import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Box } from '@mui/material';
import { Home, Settings, People, ExitToApp } from '@mui/icons-material';
const drawerWidth = 240;

export default function AdminPortal() {
  return (
      <div style={{ display: 'flex' }}>
        
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        style={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        PaperProps={{
          style: {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <div>
          <List>
            <ListItem button>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText   primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><People /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Box
        component="main"
        style={{
          flexGrow: 1,
          padding: 3,
          marginLeft: drawerWidth,
        }}
      >
        <Toolbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Welcome to the Admin Portal
          </Typography>
          <Typography  paragraph>
            This is the main content area. You can add different components here based on the functionality you want to provide in the admin portal.
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
