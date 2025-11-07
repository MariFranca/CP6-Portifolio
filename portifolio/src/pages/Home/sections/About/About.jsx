import { Container, Typography, Box, Stack, Paper } from "@mui/material";

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: "quaternary.main", // 🔹 fundo padronizado
        color: "primary.main",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            textAlign: "center",
            backgroundColor: "background.paper", // 🔹 mantém contraste suave com o fundo
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              color="primary"
            >
              Sobre mim
            </Typography>

            <Box>
              <Typography variant="body1" color="tertiary.main" paragraph>
                Olá! Eu sou a <strong>Mari</strong> e sou uma desenvolvedora apaixonada
                por tecnologia, design e estou em constante aprendizado. Gosto de transformar ideias em
                projetos reais, criando interfaces modernas e funcionais.
              </Typography>

              <Typography variant="body1" color="tertiary.main" paragraph>
                Tenho experiência com <strong>React</strong>, <strong>Tailwind CSS</strong>, 
                <strong> JavaScript</strong> e <strong>Python</strong>, além de estar sempre buscando
                aprimorar minhas habilidades e aprendendo novas tecnologias.
              </Typography>

              <Typography variant="body1" color="tertiary.main">
                Sou uma pessoa dedicada, organizada e que adora trabalhar em equipe!
                Estou animada para contribuir com projetos inovadores e fazer a diferença
                no mundo da tecnologia.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
