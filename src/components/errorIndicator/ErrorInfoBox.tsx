import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ErrorInfoBox({retryFetch}: {retryFetch: () => void}) {
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
      sx={{ border: "2px solid #A75A5A" }}
      borderRadius={4}
    >
      <Typography
        align="center"
        component="h2"
        sx={{fontSize: "24px", lineHeight: "2rem", color: "#A75A5A"}}
      >
        Error
      </Typography>
      <Typography
        align="center"
        component="h2"
        sx={{fontSize: "1rem", lineHeight: "2rem", color: "#A75A5A"}}
      >
          Oops something went wrong!
      </Typography>
      <Button
        variant="contained"
        sx={{bgcolor: "#A75A5A"}}
        onClick={() => retryFetch()}
      >
        TRY AGAIN
      </Button>
    </Box>
  ) 
}