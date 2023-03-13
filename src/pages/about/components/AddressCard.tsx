import { Card, CardContent, Box, Typography, IconButton, TextField, Button } from '@mui/material'
import { useState } from 'react'
import CustomModal from '../../../components/CustomModal'
import { AddressType, ActionType, Actions } from '../../../store/Reducer'
import EditIcon from '@mui/icons-material/Edit'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export function AddressCard({
  address,
  dispatch,
}: {
  address: AddressType
  dispatch: React.Dispatch<ActionType>
}) {
  const [open, setOpen] = useState(false)
  const [floor, setFloor] = useState(address.floor)
  const [area, setArea] = useState(address.area)
  const [town, setTown] = useState(address.town)
  const [city, setCity] = useState(address.city)
  const [landmark, setLandmark] = useState(address.landmark)
  const [pinCode, setPinCode] = useState(address.pinCode)
  const getAddress = `${floor} ${area} ${landmark} ${town} ${city} ${pinCode}`

  const handleSubmit = () => {
    dispatch({ type: Actions.addAddress, payload: { area, city, floor, landmark, pinCode, town } })
    setOpen(false)
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 2,
        boxShadow: 0,
        border: 1,
        height: '170px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        {/* header */}
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignContent={'center'}
          marginBottom={2}
        >
          <Box display={'flex'} alignContent={'center'}>
            <LocationOnIcon color={'disabled'} fontSize={'large'} />
            <Typography variant='h6' component='div' marginLeft={2}>
              Address
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label='edit' color='primary' onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>

        {/* subtitle 1*/}
        <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
          <Box display={'flex'} alignContent={'center'}>
            <Typography variant='subtitle2' marginLeft={2} fontWeight={400}>
              {getAddress}
            </Typography>
          </Box>
        </Box>

        {/* modal */}
        <CustomModal handleClose={() => setOpen(false)} open={open} title={'Address'}>
          <Box>
            <Box>
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Floor Number / Block no / Office Name'}
                hiddenLabel
                value={floor}
                onChange={(e) => setFloor(e.currentTarget.value)}
              />
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Area / Locality'}
                hiddenLabel
                value={area}
                onChange={(e) => setArea(e.currentTarget.value)}
              />
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Nearest Landmark'}
                hiddenLabel
                value={landmark}
                onChange={(e) => setLandmark(e.currentTarget.value)}
              />
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Town / City'}
                hiddenLabel
                value={town}
                onChange={(e) => setTown(e.currentTarget.value)}
              />
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'City'}
                hiddenLabel
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              />
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Pin Code'}
                hiddenLabel
                value={pinCode}
                onChange={(e) => setPinCode(e.currentTarget.value)}
              />
            </Box>
            <Box mt={4}>
              <Button variant='contained' fullWidth size='large' onClick={handleSubmit}>
                Save
              </Button>
            </Box>
          </Box>
        </CustomModal>
      </CardContent>
    </Card>
  )
}
