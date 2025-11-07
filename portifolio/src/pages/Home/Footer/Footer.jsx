import { Box, Stack, Typography, IconButton, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main", 
        color: "primary.contrastText", 
        py: 4,
        textAlign: "center",
        mt: 0, 
      }}
    >

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <IconButton
          component={Link}
          href="https://github.com/MariFranca"
          target="_blank"
          rel="noopener"
          sx={{
            color: "primary.contrastText",
            transition: "0.3s",
            "&:hover": { color: "tertiary.main", transform: "scale(1.1)" },
          }}
        >
        <GitHub fontSize="medium" />
        </IconButton>

        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/mariana-souzaf/"
          target="_blank"
          rel="noopener"
          sx={{
            color: "primary.contrastText",
            transition: "0.3s",
            "&:hover": { color: "tertiary.main", transform: "scale(1.1)" },
          }}
        >
          <LinkedIn fontSize="medium" />
        </IconButton>
      </Stack>

      <Typography variant="body2" sx={{ color: "primary.contrastText", mb: 0.5 }}>
        © {new Date().getFullYear()} Mariana Souza. All rights reserved.
      </Typography>

      <Typography variant="caption" sx={{ color: "quaternary.main" }}>
        Built with React & Material UI
      </Typography>
    </Box>
  );
}
