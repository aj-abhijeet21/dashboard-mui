import { Modal, Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const style = {
  position: 'absolute' as 'absolute',
  top: '0%',
  right: '0%',
  height: '100%',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type ModalProps = {
  open: boolean
  handleClose: () => void
  title: string
  subtitle?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

function CustomModal({ handleClose, open, children, title, subtitle, icon }: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'}>
            <IconButton onClick={handleClose}>
              <ArrowBackIcon />
            </IconButton>
            <Typography id='modal-modal-title' variant='h6' component='h2' marginLeft={2}>
              {title}
            </Typography>
          </Box>
          <Box>{icon}</Box>
        </Box>
        <Box>
          <Typography id='modal-modal-description' sx={{ mt: 2, color: 'text.secondary' }}>
            {subtitle}
          </Typography>
        </Box>
        <Box marginTop={2}>{children}</Box>
      </Box>
    </Modal>
  )
}

export default CustomModal
