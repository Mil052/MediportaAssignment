import { Outlet } from "react-router-dom";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

export default function Layout () {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#5A94A7",
          padding: "1rem",
          height: "4rem",
          position: "relative",
          zIndex: "50"
        }}
      >
        <Typography
          align="center"
          component="h1"
          sx={{fontSize: {xs: "18px", sm: "24px"}, lineHeight: "2rem" }}
        >
          TEST ASSIGNMENT FOR MEDIPORTA
        </Typography>
      </AppBar>
      <Container
        maxWidth="md"
        disableGutters
        sx={{minHeight: "calc(100vh - 4rem - 3rem)", bgcolor: "#F5F5F5", paddingY: "2rem"}}
      >
        <Outlet/>
      </Container>
      <Box component="footer" bgcolor="#A75A71" height="3rem" padding="8px 1rem">
        <Typography align="center" component="h2" sx={{fontSize: "1rem", lineHeight: "2rem", color: "white"}}>
          Made by Miłosz Gajda
        </Typography>
      </Box>
    </>
  )
}
