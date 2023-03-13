import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Info from '../pages/about/tabs/Info'
import TermsAndConditions from '../pages/about/tabs/TermsAndConditions'
import Privacy from '../pages/about/tabs/Privacy'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default function TabBar() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Info' />
          <Tab label='FAQ' />
          <Tab label='Complaints and Feedback' />
          <Tab label='Privacy Policy' />
          <Tab label='Terms & Conditions' />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Info />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant='h6' component='div' marginRight={2}>
          FAQs
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant='h6' component='div' marginRight={2}>
          Complaints and Feedback
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Privacy />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TermsAndConditions />
      </TabPanel>
    </Box>
  )
}
