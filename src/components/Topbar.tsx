import { Avatar, Box, Button, IconButton, OutlinedInput, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Topbar() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between', p: 2, zIndex: 1, bgcolor: 'white' }}
    >
      {/* SEARCH BAR */}
      <Box sx={{ display: 'flex', borderRadius: '3px', marginLeft: '250px' }}>
        <OutlinedInput
          size='small'
          sx={{
            ml: 2,
            flex: 1,
            borderRadius: 2,
            bgcolor: '#e0e0e0',
            borderWidth: 0,
            borderColor: 'white',
            width: '300px',
          }}
          placeholder='Search'
        />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex' alignItems={'center'}>
        <Button
          sx={{
            bgcolor: 'black',
            px: 2,
            '&: hover': {
              bgcolor: 'black',
              color: 'white',
            },
          }}
        >
          <ShoppingCartIcon sx={{ color: 'white', marginRight: 2 }} />
          <Typography fontSize={'12px'} color='white'>
            Checkout (200)
          </Typography>
        </Button>

        <Avatar
          sx={{
            marginLeft: 4,
          }}
        />
        <Typography fontSize={'14px'} color='black' marginLeft={2} fontWeight={500}>
          User Admin
        </Typography>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
