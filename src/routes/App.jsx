import { Link, useNavigate } from 'react-router-dom';
import {
  Box, Drawer, AppBar, CssBaseline,
  Toolbar, List, Typography,
  ListItem, ListItemButton, ListItemText
} from '@mui/material';

import { Outlet, useLoaderData } from "react-router-dom";

const drawerWidth = 240;

export default function App() {
  const navigate = useNavigate()
  const searchParams = new URLSearchParams()
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              THE WEATHER FORECAST
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {[{
                name: 'Ho Chi Minh',
                nameURL: 'HCM',
                lat: '10.823099',
                lon: '106.629662',
              },
              {
                name: 'Bangkok',
                nameURL: 'Bangkok',
                lat: '13.756331',
                lon: '100.501762',
              },
              {
                name: 'Seoul',
                nameURL: 'Seoul',
                lat: '37.566536',
                lon: '126.977966',
              },
              {
                name: 'Tokyo',
                nameURL: 'Tokyo',
                lat: '35.6762',
                lon: '139.6503'
              },
              {
                name: 'Bali',
                nameURL: 'Bali',
                lat: '8.3405',
                lon: '115.0920'
              }
              ].map((text, index) => (
                <ListItem key={text.name} disablePadding>
                  <ListItemButton onClick={() => {
                    navigate(`${text.nameURL}`,{state:[text.lat, text.lon]});
                  }}>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
          </Typography>
        </Box>
      </Box>
      <div id="detail" align='center'>
        <Outlet />
      </div>
    </>
  );
}

