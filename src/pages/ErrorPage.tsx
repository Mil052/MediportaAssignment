import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default function ErrorPage () {

  const ArrowLink = styled(Link) ({
    textAlign: "center",
    fontSize: "24px",
    display: "block",
    textDecoration: "none",
    lineHeight: "32px",
    color: "#1976d2",
    marginTop: "4rem",
    '& .arrow-link_arrow': {fontSize: "32px", marginLeft: "1rem"},
    '&:hover': {transform: "scale(1.2)", textShadow: "1px 2px 3px rgba(0, 0, 0, 0.3)"},
    '&:active': {transform: "scale(1.0)", textShadow: "none"}
  });

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        minHeight: "20rem",
        height: "100vh"
      }}
    >
      <Typography
        align="center"
        component="h2"
        color="black"
        sx={{fontSize: "40px", lineHeight: "3rem"}}
      >
        Oops!!!
      </Typography>
      <Typography
        align="center"
        component="h3"
        color="black"
        sx={{fontSize: "2rem", lineHeight: "40px"}}
      >
          Page not found.
      </Typography>
      <ArrowLink to="/">
        <span>Go to Home Page</span>
        <span className="arrow-link_arrow">&#10230;</span>
      </ArrowLink>
    </Container>
  ) 
}