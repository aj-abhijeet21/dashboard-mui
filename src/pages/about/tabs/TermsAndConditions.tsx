import { Box, Button, Card, CardContent, IconButton, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../store/GlobalContextProvider'
import EditIcon from '@mui/icons-material/Edit'
import CustomModal from '../../../components/CustomModal'
import { Actions, TermsConditionType } from '../../../store/Reducer'

function TermsAndConditions() {
  const { state, dispatch } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [selectedSection, setSelectedSection] = useState<string>(state.termsAndConditions.agreement)
  const [sectionName, setSectionName] = useState<string>('1. Agreement')
  const [newTnC, setNewTnC] = useState<TermsConditionType>(state.termsAndConditions)

  const handleEdit = () => {
    dispatch({
      type: Actions.editTermsAndConditions,
      payload: newTnC,
    })
    setOpen(false)
  }

  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
        <Box>
          <Box display={'flex'}>
            <Typography variant='h6' component='div' marginRight={2}>
              Terms and Conditions
            </Typography>
            <IconButton aria-label='edit' color='primary' onClick={() => setOpen(true)}>
              <EditIcon />
            </IconButton>
          </Box>
          <Box>
            <Typography variant='subtitle1' fontWeight={500}>
              {sectionName}
            </Typography>
          </Box>
          <Box marginRight={4}>
            <Typography variant='subtitle2' fontWeight={300}>
              {selectedSection}
            </Typography>
          </Box>
        </Box>
        <Card
          sx={{
            minWidth: 275,
            borderRadius: 2,
            boxShadow: 0,
            border: 1,
            marginBottom: 1,
          }}
        >
          <CardContent>
            <Typography fontWeight={500} marginBottom={4}>
              Table of Contents:
            </Typography>
            <Typography
              marginBottom={2}
              fontWeight={300}
              sx={{
                cursor: 'pointer',
                '&: hover': {
                  color: 'red',
                  fontWeight: '500',
                },
              }}
              onClick={() => {
                setSelectedSection(state.termsAndConditions.agreement)
                setSectionName('1. Agreement')
              }}
            >
              1. Agreement
            </Typography>
            <Typography
              marginBottom={2}
              fontWeight={300}
              sx={{
                cursor: 'pointer',
                '&: hover': {
                  color: 'red',
                  fontWeight: '500',
                },
              }}
              onClick={() => {
                setSelectedSection(state.termsAndConditions.services)
                setSectionName('2. Services & Paid Subscription')
              }}
            >
              2. Services & Paid Subscription
            </Typography>
            <Typography
              marginBottom={2}
              fontWeight={300}
              sx={{
                cursor: 'pointer',
                '&: hover': {
                  color: 'red',
                  fontWeight: '500',
                },
              }}
              onClick={() => {
                setSelectedSection(state.termsAndConditions.laws)
                setSectionName('3. Rights & Laws')
              }}
            >
              3. Rights & Laws
            </Typography>
            <Typography
              marginBottom={2}
              fontWeight={300}
              sx={{
                cursor: 'pointer',
                '&: hover': {
                  color: 'red',
                  fontWeight: '500',
                },
              }}
              onClick={() => {
                setSelectedSection(state.termsAndConditions.applications)
                setSectionName('4. 3rd Party Applications')
              }}
            >
              4. 3rd Party Applications
            </Typography>
            <Typography
              marginBottom={2}
              fontWeight={300}
              sx={{
                cursor: 'pointer',
                '&: hover': {
                  color: 'red',
                  fontWeight: '500',
                },
              }}
              onClick={() => {
                setSelectedSection(state.termsAndConditions.rights)
                setSectionName('5. Rights you grant us')
              }}
            >
              5. Rights you grant us
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <CustomModal handleClose={() => setOpen(false)} open={open} title={'Terms & Conditions'}>
        <Box>
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Agreement
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Agreement'}
            hiddenLabel
            value={newTnC.agreement}
            onChange={(e) =>
              setNewTnC((prev) => {
                return { ...prev, agreement: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Services & Paid Subscription
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Services & Paid Subscription'}
            hiddenLabel
            value={newTnC.services}
            onChange={(e) =>
              setNewTnC((prev) => {
                return { ...prev, services: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Rights & Laws
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Rights & Laws'}
            hiddenLabel
            value={newTnC.laws}
            onChange={(e) =>
              setNewTnC((prev) => {
                return { ...prev, laws: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            3rd Party Applications
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'3rd Party Applications'}
            hiddenLabel
            value={newTnC.applications}
            onChange={(e) =>
              setNewTnC((prev) => {
                return { ...prev, applications: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Rights you grant us
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Rights you grant us'}
            hiddenLabel
            value={newTnC.rights}
            onChange={(e) =>
              setNewTnC((prev) => {
                return { ...prev, rights: e.target.value }
              })
            }
          />
          <Button variant='contained' fullWidth size='large' onClick={() => handleEdit()}>
            Edit Terms & Conditions
          </Button>
        </Box>
      </CustomModal>
    </Box>
  )
}

export default TermsAndConditions
