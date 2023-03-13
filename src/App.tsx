import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/about/About'
import SideDrawer from './components/SideDrawer'
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
import Topbar from './components/Topbar'
import { red } from '@mui/material/colors'
import { GlobalContextProvider } from './store/GlobalContextProvider'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  })

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box
            component='main'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              backgroundColor: '#e0e0e0',
            }}
          >
            <Box component='main' sx={{ flexGrow: 1, flexDirection: 'column' }}>
              <Topbar />
              <SideDrawer />
            </Box>

            <Box
              marginLeft={'260px'}
              marginY={'20px'}
              marginRight={'20px'}
              padding={'20px'}
              bgcolor={'#fff'}
              height={'100vh'}
              borderRadius={3}
            >
              <Routes>
                <Route index path='/' element={<About />}></Route>

                <Route
                  path='/home'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Dashboard
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/awards'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Awards
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/orders'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Orders
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/payments'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Payments
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/team'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Team Members
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/products'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Products
                    </Typography>
                  }
                ></Route>
                <Route
                  path='/partners'
                  element={
                    <Typography variant='h5' marginBottom={4}>
                      Partners
                    </Typography>
                  }
                ></Route>
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default App
