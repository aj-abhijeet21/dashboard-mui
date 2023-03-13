import { Box, Typography, IconButton, Card, CardContent, TextField, Button } from '@mui/material'
import { useContext, useState } from 'react'
import CustomModal from '../../../components/CustomModal'
import { GlobalContext } from '../../../store/GlobalContextProvider'
import { Actions, PrivacyType } from '../../../store/Reducer'
import EditIcon from '@mui/icons-material/Edit'

function Privacy() {
  const { state, dispatch } = useContext(GlobalContext)
  const [open, setOpen] = useState(false)
  const [selectedSection, setSelectedSection] = useState<string>(state.privacy.introduction)
  const [sectionName, setSectionName] = useState<string>('1. Agreement')
  const [newPrivacy, setNewPrivacy] = useState<PrivacyType>(state.privacy)

  const handleEdit = () => {
    dispatch({
      type: Actions.editPrivacy,
      payload: newPrivacy,
    })
    setOpen(false)
  }

  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
        <Box>
          <Box display={'flex'}>
            <Typography variant='h6' component='div' marginRight={2}>
              Your Privacy Matters
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
                setSelectedSection(state.privacy.introduction)
                setSectionName('1. Introduction')
              }}
            >
              1. Introduction
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
                setSelectedSection(state.privacy.dataCollect)
                setSectionName('2. Data we collect')
              }}
            >
              2. Data we collect
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
                setSelectedSection(state.privacy.dataUsage)
                setSectionName('3. How we use your data')
              }}
            >
              3. How we use your data
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
                setSelectedSection(state.privacy.dataShare)
                setSectionName('4. How we share information')
              }}
            >
              4. How we share information
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
                setSelectedSection(state.privacy.choices)
                setSectionName('5. Your choices & obligations')
              }}
            >
              5. Your choices & obligations
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
                setSelectedSection(state.privacy.other)
                setSectionName('6. Other important information')
              }}
            >
              6. Other important information
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <CustomModal handleClose={() => setOpen(false)} open={open} title={'Terms & Conditions'}>
        <Box>
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Introduction
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Introduction'}
            hiddenLabel
            value={newPrivacy.introduction}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, introduction: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Data we collect
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Data we collect'}
            hiddenLabel
            value={newPrivacy.dataCollect}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, dataCollect: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            How we use your data
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'How we use your data'}
            hiddenLabel
            value={newPrivacy.dataUsage}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, dataUsage: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            How we share information
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'How we share information'}
            hiddenLabel
            value={newPrivacy.dataShare}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, dataShare: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Your choices & obligations
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Your choices & obligations'}
            hiddenLabel
            value={newPrivacy.choices}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, choices: e.target.value }
              })
            }
          />
          <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
            Other important information
          </Typography>
          <TextField
            sx={{ mb: 2, alignItems: 'center' }}
            size='medium'
            fullWidth
            variant='filled'
            InputProps={{ disableUnderline: true }}
            placeholder={'Other important information'}
            hiddenLabel
            value={newPrivacy.other}
            onChange={(e) =>
              setNewPrivacy((prev) => {
                return { ...prev, other: e.target.value }
              })
            }
          />
          <Button variant='contained' fullWidth size='large' onClick={() => handleEdit()}>
            Edit Privacy
          </Button>
        </Box>
      </CustomModal>
    </Box>
  )
}

export default Privacy
