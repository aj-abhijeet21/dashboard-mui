import { Card, CardContent, Box, Typography, IconButton, Button, TextField } from '@mui/material'
import { Actions, ActionType, ContactType } from '../../../store/Reducer'
import ContactsIcon from '@mui/icons-material/Contacts'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import CustomModal from '../../../components/CustomModal'
import { useState } from 'react'

export function ContactCard({
  contacts,
  dispatch,
}: {
  contacts: ContactType[]
  dispatch: React.Dispatch<ActionType>
}) {
  const [open, setOpen] = useState(false)
  const [textFieldOpen, setTextfieldOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState<ContactType>({
    accountName: '',
    primaryEmail: '',
    primaryPhone: 0,
    secondaryEmail: '',
    secondaryPhone: 0,
  })
  const [newContact, setNewContact] = useState<ContactType>({
    accountName: '',
    primaryEmail: '',
    primaryPhone: 0,
    secondaryEmail: '',
    secondaryPhone: 0,
  })
  const [secondaryEmail, setSecondaryEmail] = useState(false)
  const [secondaryPhone, setSecondaryPhone] = useState(false)

  const handleAdd = () => {
    dispatch({
      type: Actions.addContact,
      payload: newContact,
    })
    setTextfieldOpen(false)
    setNewContact({
      accountName: '',
      primaryEmail: '',
      primaryPhone: 0,
      secondaryEmail: '',
      secondaryPhone: 0,
    })
  }

  const handleRemove = (contact: ContactType) => {
    dispatch({
      type: Actions.removeContact,
      payload: contact,
    })
  }

  const handleEdit = () => {
    dispatch({
      type: Actions.editContact,
      payload: {
        newContact: newContact,
        oldContact: selectedContact,
      },
    })
    setEditOpen(false)
    setNewContact({
      accountName: '',
      primaryEmail: '',
      primaryPhone: 0,
      secondaryEmail: '',
      secondaryPhone: 0,
    })
  }
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 2,
        boxShadow: 0,
        border: 1,
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
            <ContactsIcon color={'disabled'} fontSize={'large'} />
            <Typography variant='h6' component='div' marginLeft={2}>
              Contact
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
            <EmailIcon color={'disabled'} fontSize={'small'} />
            <Typography variant='subtitle2' marginLeft={2} fontWeight={400}>
              {contacts[0].primaryEmail} / {contacts[0].secondaryEmail}
            </Typography>
          </Box>
          {contacts.length > 1 && (
            <Box>
              <IconButton aria-label='edit' color='primary'>
                +{contacts.length - 1}
              </IconButton>
            </Box>
          )}
        </Box>

        {/* subtitle2 */}
        <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'}>
          <Box display={'flex'} alignContent={'center'}>
            <PhoneIcon color={'disabled'} fontSize={'small'} />
            <Typography variant='subtitle2' gutterBottom marginLeft={2} fontWeight={400}>
              +91 {contacts[0].primaryPhone} / {contacts[0].secondaryPhone}
            </Typography>
          </Box>
        </Box>

        {/* modal */}
        <CustomModal
          handleClose={() => setOpen(false)}
          open={open}
          title={'Contacts'}
          icon={
            <IconButton aria-label='edit' color='primary' onClick={() => setTextfieldOpen(true)}>
              <AddIcon />
            </IconButton>
          }
        >
          <Box>
            {!textFieldOpen ? (
              contacts.map((contact) => (
                <Card
                  sx={{
                    minWidth: 275,
                    borderRadius: 2,
                    boxShadow: 0,
                    border: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: 1,
                  }}
                >
                  <CardContent>
                    {!editOpen ? (
                      <>
                        <Box display={'flex'} justifyContent={'space-between'}>
                          <Box display={'flex'} alignItems={'center'}>
                            <ContactsIcon color={'disabled'} fontSize={'small'} />
                            <Typography fontWeight={500} marginLeft={2}>
                              {contact.accountName}
                            </Typography>
                          </Box>

                          <Box display={'flex'}>
                            <IconButton
                              aria-label='edit'
                              color='primary'
                              onClick={() => handleRemove(contact)}
                            >
                              <DeleteForeverIcon />
                            </IconButton>
                            <IconButton
                              aria-label='edit'
                              color='primary'
                              onClick={() => {
                                setSelectedContact(contact)
                                setNewContact(contact)
                                setEditOpen(true)
                              }}
                            >
                              <EditIcon />
                            </IconButton>
                          </Box>
                        </Box>

                        <Box display={'flex'} alignContent={'center'} mt={1}>
                          <EmailIcon color={'disabled'} fontSize={'small'} />
                          <Typography variant='subtitle2' marginLeft={2} fontWeight={400}>
                            {contact.primaryEmail} / {contact.secondaryEmail}
                          </Typography>
                        </Box>

                        <Box display={'flex'} alignContent={'center'} mt={1}>
                          <PhoneIcon color={'disabled'} fontSize={'small'} />
                          <Typography
                            variant='subtitle2'
                            gutterBottom
                            marginLeft={2}
                            fontWeight={400}
                          >
                            +91 {contact.primaryPhone} / {contact.secondaryPhone}
                          </Typography>
                        </Box>
                      </>
                    ) : (
                      <Box>
                        <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                          Account Name
                        </Typography>
                        <TextField
                          sx={{ mb: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Account Name'}
                          hiddenLabel
                          value={newContact?.accountName}
                          onChange={(e) => {
                            setNewContact((prev) => {
                              return { ...prev, accountName: e.target.value }
                            })
                          }}
                        />
                        <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                          Primary Email
                        </Typography>
                        <TextField
                          type='email'
                          sx={{ mb: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Email ID'}
                          hiddenLabel
                          value={newContact?.primaryEmail}
                          onChange={(e) => {
                            setNewContact((prev) => {
                              return { ...prev, primaryEmail: e.target.value }
                            })
                          }}
                        />
                        <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                          Primary Phone
                        </Typography>
                        <TextField
                          type='number'
                          sx={{ mb: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Email ID'}
                          hiddenLabel
                          value={newContact?.primaryPhone}
                          onChange={(e) => {
                            setNewContact((prev) => {
                              return { ...prev, primaryPhone: Number(e.target.value) }
                            })
                          }}
                        />
                        <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                          Secondary Email
                        </Typography>
                        <TextField
                          type='email'
                          sx={{ mb: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Email ID'}
                          hiddenLabel
                          value={newContact.secondaryEmail}
                          onChange={(e) =>
                            setNewContact((prev) => {
                              return { ...prev, secondaryEmail: e.target.value }
                            })
                          }
                        />
                        <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                          Secondary Phone
                        </Typography>
                        <TextField
                          type='number'
                          sx={{ mb: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Email ID'}
                          hiddenLabel
                          value={newContact?.primaryPhone}
                          onChange={(e) => {
                            setNewContact((prev) => {
                              return { ...prev, secondaryPhone: Number(e.target.value) }
                            })
                          }}
                        />
                        <Button
                          variant='contained'
                          fullWidth
                          size='large'
                          sx={{ mb: 2 }}
                          onClick={() => handleEdit()}
                        >
                          Save
                        </Button>
                        <Button
                          variant='contained'
                          fullWidth
                          size='large'
                          onClick={() => {
                            setTextfieldOpen(false)
                            setSecondaryEmail(false)
                            setSecondaryPhone(false)
                            setEditOpen(false)
                          }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Box>
                <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                  Account Name
                </Typography>
                <TextField
                  sx={{ mb: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Account Name'}
                  hiddenLabel
                  value={newContact.accountName}
                  onChange={(e) =>
                    setNewContact((prev) => {
                      return { ...prev, accountName: e.target.value }
                    })
                  }
                />
                <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                  Primary Email
                </Typography>
                <TextField
                  type='email'
                  sx={{ mb: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Email ID'}
                  hiddenLabel
                  value={newContact.primaryEmail}
                  onChange={(e) =>
                    setNewContact((prev) => {
                      return { ...prev, primaryEmail: e.target.value }
                    })
                  }
                />

                {secondaryEmail ? (
                  <>
                    <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                      Secondary Email
                    </Typography>
                    <TextField
                      type='email'
                      sx={{ mb: 2, alignItems: 'center' }}
                      size='medium'
                      fullWidth
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                      placeholder={'Secondary Email ID'}
                      hiddenLabel
                      value={newContact.secondaryEmail}
                      onChange={(e) =>
                        setNewContact((prev) => {
                          return { ...prev, secondaryEmail: e.target.value }
                        })
                      }
                    />
                  </>
                ) : (
                  <Button
                    variant='contained'
                    fullWidth
                    size='small'
                    sx={{ mb: 2, bgcolor: '#ebbab7' }}
                    onClick={() => setSecondaryEmail(true)}
                  >
                    <IconButton aria-label='add' color='primary'>
                      <AddIcon />
                      <Typography>Add More</Typography>
                    </IconButton>
                  </Button>
                )}
                <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                  Primary Phone
                </Typography>
                <TextField
                  type='number'
                  sx={{ mb: 2, alignItems: 'center' }}
                  size='medium'
                  fullWidth
                  variant='filled'
                  InputProps={{ disableUnderline: true }}
                  placeholder={'Phone'}
                  hiddenLabel
                  value={newContact.primaryPhone}
                  onChange={(e) =>
                    setNewContact((prev) => {
                      return { ...prev, primaryPhone: Number(e.target.value) }
                    })
                  }
                />
                {secondaryPhone ? (
                  <>
                    <Typography variant='subtitle2' marginBottom={1} fontWeight={400}>
                      Secondary Phone
                    </Typography>
                    <TextField
                      type='number'
                      sx={{ mb: 2, alignItems: 'center' }}
                      size='medium'
                      fullWidth
                      variant='filled'
                      InputProps={{ disableUnderline: true }}
                      placeholder={'Secondary Phone'}
                      hiddenLabel
                      value={newContact.secondaryPhone}
                      onChange={(e) =>
                        setNewContact((prev) => {
                          return { ...prev, secondaryPhone: Number(e.target.value) }
                        })
                      }
                    />
                  </>
                ) : (
                  <Button
                    variant='contained'
                    fullWidth
                    size='small'
                    sx={{ mb: 2, bgcolor: '#ebbab7' }}
                    onClick={() => setSecondaryPhone(true)}
                  >
                    <IconButton aria-label='edit' color='primary'>
                      <AddIcon />
                      <Typography>Add More</Typography>
                    </IconButton>
                  </Button>
                )}

                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                  sx={{ mb: 2 }}
                  onClick={() => handleAdd()}
                >
                  Save
                </Button>
                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                  onClick={() => {
                    setTextfieldOpen(false)
                    setSecondaryEmail(false)
                    setSecondaryPhone(false)
                  }}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </Box>
        </CustomModal>
      </CardContent>
    </Card>
  )
}
