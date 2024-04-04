import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LoadingInfoBox() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="2rem"
      alignItems="center"
      justifyContent= "space-between"
      width="20rem"
      height="20rem"
      margin="3rem auto"
      border="2px solid"
      borderColor="#1976d2"
      borderRadius={4}
    >
      <Typography
        align="center"
        component="h2"
        color="primary"
        sx={{fontSize: "24px", lineHeight: "2rem"}}
      >
        Loading...
      </Typography>
      <CircularProgress disableShrink size="4rem"/>
      <Typography
        align="center"
        component="h2"
        color="primary"
        sx={{fontSize: "1rem", lineHeight: "2rem"}}
      >
          Please wait.
        </Typography>
    </Box>
  ) 
}