import { Card, CardContent, Box, Typography, IconButton, Button, TextField } from '@mui/material'
import { Actions, ActionType, StatementType } from '../../../store/Reducer'
import EditIcon from '@mui/icons-material/Edit'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useState } from 'react'
import CustomModal from '../../../components/CustomModal'
import AddIcon from '@mui/icons-material/Add'

export function StatementCard({
  statements,
  dispatch,
}: {
  statements: StatementType[]
  dispatch: React.Dispatch<ActionType>
}) {
  const [open, setOpen] = useState(false)
  const [textFieldOpen, setTextfieldOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [selectedStatement, setSelectedStatement] = useState<StatementType>()
  const [newStatement, setNewStatement] = useState('')
  const handleAdd = () => {
    const statement: StatementType = { statement: newStatement }
    dispatch({
      type: Actions.addStatement,
      payload: statement,
    })
    setTextfieldOpen(false)
  }
  const handleRemove = (statement: StatementType) => {
    dispatch({
      type: Actions.removeStatement,
      payload: statement,
    })
  }
  const handleEdit = (statement: StatementType) => {
    dispatch({
      type: Actions.editStatement,
      payload: {
        newStatement: { statement: newStatement },
        oldStatement: statement,
      },
    })
    setNewStatement('')
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: 2,
        boxShadow: 0,
        border: 1,
        height: '150px',
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
            <FormatQuoteIcon color={'disabled'} fontSize={'large'} />
            <Typography variant='h6' component='div' marginLeft={2}>
              Statement
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
          <Box>
            <Typography variant='subtitle2' marginLeft={2} fontWeight={400}>
              {statements[0].statement}
            </Typography>
          </Box>
          {statements.length > 1 && (
            <Box>
              <IconButton aria-label='edit' color='primary'>
                +{statements.length - 1}
              </IconButton>
            </Box>
          )}
        </Box>

        {/* modal */}
        <CustomModal
          handleClose={() => setOpen(false)}
          open={open}
          title={'Statement'}
          subtitle={
            'Write down the statements of the company in to convey your vision to potential customer'
          }
          icon={
            <IconButton aria-label='edit' color='primary' onClick={() => setTextfieldOpen(true)}>
              <AddIcon />
            </IconButton>
          }
        >
          <Box>
            {statements.map((statement) => (
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
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <FormatQuoteIcon color={'disabled'} fontSize={'large'} />

                    <Box display={'flex'}>
                      <IconButton
                        aria-label='edit'
                        color='primary'
                        onClick={() => handleRemove(statement)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                      <IconButton
                        aria-label='edit'
                        color='primary'
                        onClick={() => {
                          setSelectedStatement(statement)
                          setNewStatement(statement.statement)
                          setEditOpen(true)
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {statement !== selectedStatement ? (
                    <Typography>{statement.statement}</Typography>
                  ) : (
                    editOpen && (
                      <Box>
                        <TextField
                          sx={{ my: 2, alignItems: 'center' }}
                          size='medium'
                          fullWidth
                          variant='filled'
                          InputProps={{ disableUnderline: true }}
                          placeholder={'Statement'}
                          hiddenLabel
                          value={newStatement}
                          onChange={(e) => setNewStatement(e.currentTarget.value)}
                        />
                        <Button
                          variant='contained'
                          fullWidth
                          size='large'
                          onClick={() => handleEdit(selectedStatement)}
                        >
                          Edit Statement
                        </Button>
                      </Box>
                    )
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
          {textFieldOpen && (
            <Box>
              <TextField
                sx={{ my: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'Statement'}
                hiddenLabel
                value={newStatement}
                onChange={(e) => setNewStatement(e.currentTarget.value)}
              />
              <Button variant='contained' fullWidth size='large' onClick={() => handleAdd()}>
                Add Statement
              </Button>
            </Box>
          )}
        </CustomModal>
      </CardContent>
    </Card>
  )
}
