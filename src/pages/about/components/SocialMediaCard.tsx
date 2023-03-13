import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Link,
} from '@mui/material'
import { useState } from 'react'
import CustomModal from '../../../components/CustomModal'
import { SocialMediaType, ActionType, Actions } from '../../../store/Reducer'
import LinkIcon from '@mui/icons-material/Link'
import LanguageIcon from '@mui/icons-material/Language'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import EditIcon from '@mui/icons-material/Edit'

export function SocialMediaCard({
  socialMedia,
  dispatch,
}: {
  socialMedia: SocialMediaType
  dispatch: React.Dispatch<ActionType>
}) {
  const [open, setOpen] = useState(false)
  const [instagram, setInstagram] = useState(socialMedia.instagram)
  const [facebook, setFacebook] = useState(socialMedia.facebook)
  const [twitter, setTwitter] = useState(socialMedia.twitter)
  const [website, setWebsite] = useState(socialMedia.website)

  const handleSubmit = () => {
    dispatch({ type: Actions.addSocialMedia, payload: { facebook, instagram, twitter, website } })
    setOpen(false)
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
            <LinkIcon sx={{ transform: 'rotate(135deg)' }} color={'disabled'} fontSize={'large'} />
            <Typography variant='h6' component='div' marginLeft={2}>
              Social Media & Links
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label='edit' color='primary'>
              <EditIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Box>
        </Box>

        {/* subtitle 1*/}
        <Box display={'flex'} justifyContent={'space-around'} alignContent={'center'}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <LanguageIcon color={'disabled'} fontSize={'large'} />
            <Link href={socialMedia.website} underline='none' color={'black'}>
              <Typography fontSize={10} fontWeight={400}>
                Website
              </Typography>
            </Link>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <InstagramIcon color={'disabled'} fontSize={'large'} />
            <Link href={socialMedia.instagram} underline='none' color={'black'}>
              <Typography fontSize={10} fontWeight={400}>
                Instagram
              </Typography>
            </Link>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <FacebookIcon color={'disabled'} fontSize={'large'} />
            <Link href={socialMedia.facebook} underline='none' color={'black'}>
              <Typography fontSize={10} fontWeight={400}>
                Facebook
              </Typography>
            </Link>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <TwitterIcon color={'disabled'} fontSize={'large'} />
            <Link href={socialMedia.twitter} underline='none' color={'black'}>
              <Typography fontSize={10} fontWeight={400}>
                Twitter
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* modal */}
        <CustomModal
          handleClose={() => setOpen(false)}
          open={open}
          title={'Social Media'}
          subtitle={
            'Please provide the links to the social media accounts & website of the company'
          }
        >
          <Box>
            <Box>
              <Typography sx={{ mt: 2 }}>Instagram</Typography>
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'eg. www.instagram.com/companyname'}
                hiddenLabel
                value={instagram}
                onChange={(e) => setInstagram(e.currentTarget.value)}
              />
              <Typography sx={{ mt: 2 }}>Facebook</Typography>
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'eg. www.facebook.com/companyname'}
                hiddenLabel
                value={facebook}
                onChange={(e) => setFacebook(e.currentTarget.value)}
              />
              <Typography sx={{ mt: 2 }}>Twitter</Typography>
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'eg. www.twitter.com/companyname'}
                hiddenLabel
                value={twitter}
                onChange={(e) => setTwitter(e.currentTarget.value)}
              />
              <Typography sx={{ mt: 2 }}>Website</Typography>
              <TextField
                sx={{ mt: 2, alignItems: 'center' }}
                size='medium'
                fullWidth
                variant='filled'
                InputProps={{ disableUnderline: true }}
                placeholder={'eg. www.companyname.com'}
                hiddenLabel
                value={website}
                onChange={(e) => setWebsite(e.currentTarget.value)}
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
