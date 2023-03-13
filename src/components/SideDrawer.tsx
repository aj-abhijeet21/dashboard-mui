import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PaymentsIcon from '@mui/icons-material/Payments'
import InfoIcon from '@mui/icons-material/Info'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import HandshakeIcon from '@mui/icons-material/Handshake'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import WidgetsIcon from '@mui/icons-material/Widgets'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

const drawerItems = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/home',
  },
  {
    name: 'Orders',
    icon: <LocalShippingIcon />,
    path: '/orders',
  },
  {
    name: 'Team Members',
    icon: <PeopleAltIcon />,
    path: '/team',
  },
  {
    name: 'Partners',
    icon: <HandshakeIcon />,
    path: '/partners',
  },
  {
    name: 'Product Listings',
    icon: <WidgetsIcon />,
    path: '/products',
  },
  {
    name: 'Awards & Honours',
    icon: <EmojiEventsIcon />,
    path: '/awards',
  },
  {
    name: 'About Us',
    icon: <InfoIcon />,
    path: '/',
  },
  {
    name: 'Payment Info',
    icon: <PaymentsIcon />,
    path: '/payments',
  },
]

export default function SideDrawer() {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          marginLeft: '40px',
          bgcolor: 'greenyellow',
          zIndex: 0,
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          {drawerItems.map((item, index) => (
            <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  )
}
