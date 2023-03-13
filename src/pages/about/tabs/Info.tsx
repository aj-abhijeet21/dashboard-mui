import { Box, Grid } from '@mui/material'
import { useContext } from 'react'

import { GlobalContext } from '../../../store/GlobalContextProvider'
import { ContactCard } from '../components/ContactCard'
import { StatementCard } from '../components/StatementCard'
import { AddressCard } from '../components/AddressCard'
import { WorkingHoursCard } from '../components/WorkingHoursCard'
import { SocialMediaCard } from '../components/SocialMediaCard'

function Info() {
  const { state, dispatch } = useContext(GlobalContext)
  return (
    <Grid container direction='row' justifyContent='flex-start' spacing={2} alignItems='stretch'>
      <Grid item xs={12} md={4}>
        <Box>
          <ContactCard contacts={state.contacts} dispatch={dispatch} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <AddressCard address={state.address} dispatch={dispatch} />
        </Box>{' '}
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <WorkingHoursCard workingHours={state.workingHours} dispatch={dispatch} />
        </Box>{' '}
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <SocialMediaCard socialMedia={state.socialMedia} dispatch={dispatch} />
        </Box>{' '}
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <StatementCard statements={state.statements} dispatch={dispatch} />
        </Box>{' '}
      </Grid>
    </Grid>
  )
}

export default Info
