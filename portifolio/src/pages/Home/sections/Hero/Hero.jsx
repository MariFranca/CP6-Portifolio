import { Button, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import GetAppIcon from '@mui/icons-material/GetApp';
import EmailIcon from '@mui/icons-material/Email';

const StyledHero = styled("div")(() => ({
  backgroundColor: "black",
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  borderRadius: "40%", 
  maxWidth: "350px", 
  display: "block",
  margin: "0 auto",
}));

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >

            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} alt="Avatar de Mariana Souza" />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                variant="h1"
                textAlign="center"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "3.5rem",
                }}
              >
                Mariana Souza
              </Typography>

              <Typography
                variant="h2"
                textAlign="center"
                sx={{
                  color: "secondary.main",
                  fontWeight: 400,
                  fontSize: "2.2rem",
                }}
              >
                I'm a Software Engineering Student
              </Typography>

              <Grid container spacing={2} display="flex" justifyContent={{ xs: "center", md: "space-evenly" }}>
                <Grid item xs={12} md={6}>
                  <Button> <GetAppIcon/> Dowload </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button> <EmailIcon/> Contatct me </Button>
                </Grid>
              </Grid>
              
              

            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
