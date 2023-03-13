import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Button,
} from '@mui/material'
import { useState } from 'react'
import CustomModal from '../../../components/CustomModal'
import { WorkingHoursType, ActionType, Actions } from '../../../store/Reducer'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'

import EditIcon from '@mui/icons-material/Edit'

export function WorkingHoursCard({
  workingHours,
  dispatch,
}: {
  workingHours: WorkingHoursType
  dispatch: React.Dispatch<ActionType>
}) {
  const [open, setOpen] = useState(false)
  const [startDay, setStartDay] = useState(workingHours.fromDays)
  const [endDay, setEndDay] = useState(workingHours.toDays)
  const [startHour, setStartHour] = useState(workingHours.fromTime)
  const [endHour, setEndHour] = useState(workingHours.toTime)

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const time = [
    '10.00 AM',
    '11.00 PM',
    '12.00 PM',
    '13.00 PM',
    '14.00 PM',
    '15.00 PM',
    '16.00 PM',
    '17.00 PM',
    '18.00 PM',
    '19.00 PM',
    '20.00 PM',
    '21.00 PM',
    '22.00 PM',
  ]
  const handleSubmit = () => {
    dispatch({
      type: Actions.addWorkingHours,
      payload: { fromDays: startDay, toDays: endDay, fromTime: startHour, toTime: endHour },
    })
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
            <WorkHistoryIcon color={'disabled'} fontSize={'large'} />
            <Typography variant='h6' component='div' marginLeft={2}>
              Hours of Operation
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
              {workingHours.fromDays} to {workingHours.toDays} - {workingHours.fromTime} to{' '}
              {workingHours.toTime}
            </Typography>
          </Box>
        </Box>

        {/* modal */}
        <CustomModal
          handleClose={() => setOpen(false)}
          open={open}
          title={'Working Hours'}
          subtitle={'Please provide the working hours of the company'}
        >
          <Box>
            <Box>
              <Typography sx={{ mt: 2 }}>From</Typography>
              <Box display={'flex'}>
                <TextField
                  sx={{ mt: 2, mr: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Start Day'}
                  hiddenLabel
                  value={startDay}
                  onChange={(e) => setStartDay(e.target.value)}
                  select
                >
                  {days.map((day, i) => (
                    <MenuItem key={i} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{ mt: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Starting hour'}
                  hiddenLabel
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                  select
                >
                  {time.map((time, i) => (
                    <MenuItem key={i} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Typography sx={{ mt: 2 }}>To</Typography>

              <Box display={'flex'}>
                <TextField
                  sx={{ mt: 2, mr: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'End Day'}
                  hiddenLabel
                  value={endDay}
                  onChange={(e) => setEndDay(e.target.value)}
                  select
                >
                  {days.map((day, i) => (
                    <MenuItem key={i} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{ mt: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Ending hour'}
                  hiddenLabel
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                  select
                >
                  {time.map((time, i) => (
                    <MenuItem key={i} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
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
