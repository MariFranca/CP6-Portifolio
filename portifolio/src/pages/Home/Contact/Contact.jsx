import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `📩 Informações do formulário:\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    );


    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        backgroundColor: "quaternary.main",
        color: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          sx={{ mb: 10, color: "primary.main" }}
        >
          Entre em Contato
        </Typography>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "tertiary.main", lineHeight: 1.7 }}
            >
              Eu estou sempre disponível para discutir novos projetos, ideias criativas
              ou oportunidades de colaboração.
            </Typography>

            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    bgcolor: "secondary.light",
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Email sx={{ color: "white" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Email
                  </Typography>
                  <Typography variant="body2">
                    marsouzafranca@gmail.com
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    bgcolor: "secondary.light",
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone sx={{ color: "white" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Phone
                  </Typography>
                  <Typography variant="body2">+55 (11) 99838-8798</Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    bgcolor: "secondary.light",
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOn sx={{ color: "white" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    Location
                  </Typography>
                  <Typography variant="body2">São Paulo, SP</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                bgcolor: "background.paper",
              }}
            >

              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <Button
                    type="submit" 
                    variant="contained"
                    size="large"
                    sx={{
                      borderRadius: "10px",
                      bgcolor: "secondary.main",
                      "&:hover": { bgcolor: "secondary.dark" },
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
