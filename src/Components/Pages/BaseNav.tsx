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
import {Link} from 'react-router-dom'
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
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <Link to="/">
              <ListItemText primary={'Import Repositories'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/plagiarism">
              <ListItemText primary={'Plagiarism Reports'} />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemText primary={'Settings'} />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default BaseNav
