import React from 'react'
import DownloadingIcon from '@mui/icons-material/Downloading';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles'
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
  const styles = useStyles()
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#402434',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{
          color: '#8c7488',
        }}>
          HackDuke
        </Toolbar>
        <Divider />
        <List style={{ color: 'red' }}>
          <ListItem button>
          <DownloadingIcon className={styles.input}/>
            <Link to="/" style={{ textDecoration: 'none', color: 'gray' }}>
              <ListItemText primary={'Import Repositories'} />
            </Link>
          </ListItem>
          <ListItem button>
            <FindInPageIcon className={styles.input}/>
            <Link
              to="/plagiarism"
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              <ListItemText primary={'Plagiarism Reports'} />
            </Link>
          </ListItem>
          <ListItem button>
            <SettingsIcon className={styles.input}/>
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

const useStyles = makeStyles({
  // wrapper: {},
  input: {
    marginRight: 10,
    color: "gray",
  },

})

export default BaseNav
