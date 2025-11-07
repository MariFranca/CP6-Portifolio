import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Stack,
  Card,
  CardMedia,
  TextField,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";
import crudJogadoras from "../../../../assets/images/crud-jogadoras.jpg";
import siteMelodia from "../../../../assets/images/site-melodia.jpg";

export function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      title: "CRUD de Jogadoras de Futebol",
      description:
        "Este projeto é um CRUD (Create, Read, Update, Delete) desenvolvido para gerenciar informações de jogadoras de futebol.",
      image: crudJogadoras,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MariFranca/CP4-WebDev-CRUD?tab=readme-ov-file",
      demo: "https://marifranca.github.io/CP4-WebDev-CRUD/",
    },
    {
      title: "Site de Música Melodia",
      description:
        "O Melodia é um site de música desenvolvido em grupo com o objetivo de criar uma experiência inovadora para amantes da música.",
      image: siteMelodia,
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/MariFranca/CP5-FrontEnd?tab=readme-ov-file",
      demo: "https://marifranca.github.io/CP5-FrontEnd//",
    },
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        backgroundColor: "quaternary.main",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          sx={{ color: "primary.main", mb: 4 }}
        >
          Meus Projetos
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar projetos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              width: { xs: "90%", sm: "60%", md: "40%" },
              bgcolor: "background.paper",
              borderRadius: "30px",
              input: { color: "primary.main" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                "& fieldset": { borderColor: "primary.main" },
                "&:hover fieldset": { borderColor: "primary.main" },
                "&.Mui-focused fieldset": { borderColor: "primary.main" },
              },
            }}
          />
        </Box>

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Grid
              container
              spacing={6}
              alignItems="center"
              justifyContent="center"
              key={index}
              sx={{
                mb: 10,
                flexDirection:
                  index % 2 === 1 ? { xs: "column", md: "row-reverse" } : "row",
              }}
            >

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 4,
                    width: "100%",
                    maxWidth: 480,
                    transition: "transform 0.3s ease",
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: { xs: 240, md: 320 },
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  maxWidth: 500,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  color="tertiary.main"
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, lineHeight: 1.6, color: "tertiary.main" }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  spacing={1}
                  sx={{ mb: 3 }}
                >
                  {project.tags.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      variant="outlined"
                      sx={{
                        borderRadius: "8px",
                        color: "primary.main",
                        borderColor: "primary.main",
                      }}
                    />
                  ))}
                </Stack>

                <Stack
                  direction="row"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  spacing={2}
                >
                  <Button
                    variant="contained"
                    startIcon={<OpenInNew />}
                    href={project.demo}
                    target="_blank"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      px: 3,
                      bgcolor: "primary.main",
                      "&:hover": { bgcolor: "secondary.light" },
                    }}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      px: 3,
                      color: "primary.main",
                      borderColor: "primary.main",
                      "&:hover": { borderColor: "gray" },
                    }}
                  >
                    Source Code
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            align="center"
            color="tertiary.main"
            sx={{ mt: 4 }}
          >
            Nenhum projeto localizado 
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
