import React from 'react'
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  // Link
} from '@mui/material'
// import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom'
const BaseNav: React.FC = () => {
  const drawerWidth = 240

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          HackDuke
        </Toolbar>
        <Divider />
        <List style={{ color: 'red' }}>
          <ListItem button>
            <Link to="/" style={{ textDecoration: 'none', color: 'gray' }}>
              <ListItemText primary={'Import Repositories'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              to="/plagiarism"
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              <ListItemText primary={'Plagiarism Reports'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              to="/settings"
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              <ListItemText primary={'Settings'} />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default BaseNav
