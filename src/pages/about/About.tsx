import { Button, IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import WidgetsIcon from '@mui/icons-material/Widgets'
import TabBar from '../../components/TabBar'
import { GlobalContext } from '../../store/GlobalContextProvider'
import { useContext, useState } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import EditIcon from '@mui/icons-material/Edit'
import CustomModal from '../../components/CustomModal'
import { Actions } from '../../store/Reducer'

function About() {
  const [open, setOpen] = useState(false)
  const { state, dispatch } = useContext(GlobalContext)

  const [description, setDescription] = useState(state.description)

  const handleEdit = () => {
    dispatch({
      type: Actions.editDescription,
      payload: description,
    })
    setOpen(false)
  }
  return (
    <Box>
      <Typography variant='h5' marginBottom={4}>
        About Us
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Box>
          <WidgetsIcon fontSize='large' />
        </Box>
        <Box marginLeft={2}>
          <Typography variant='h5'>A.T. Inks</Typography>
          <Typography variant='subtitle1' color={'GrayText'}>
            Digital Inks
          </Typography>
        </Box>
        <Box display={'flex'} marginLeft={8}>
          <VerifiedIcon color='disabled' />
          <Typography
            variant='subtitle2'
            marginLeft={1}
            sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Verify Company
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Typography variant='subtitle1' color={'GrayText'}>
          {description}
        </Typography>
        <IconButton aria-label='edit' color='primary' onClick={() => setOpen(true)}>
          <EditIcon />
        </IconButton>
      </Box>
      <CustomModal handleClose={() => setOpen(false)} open={open} title={'Terms & Conditions'}>
        <Box>
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Description
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Description'}
            hiddenLabel
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant='contained' fullWidth size='large' onClick={() => handleEdit()}>
            Edit Description
          </Button>
        </Box>
      </CustomModal>
      <TabBar />
    </Box>
  )
}

export default About
