import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Footer } from "@/components/Footer";

const NotFound = () => (
  <Box component="main">
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={800}
        sx={{
          fontSize: { xs: "6rem", md: "8rem" },
          background:
            "linear-gradient(135deg, rgb(80, 175, 149), rgb(38, 161, 123))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
          mb: 2,
        }}
      >
        404
      </Typography>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button variant="contained" href="/" size="large">
        Go Home
      </Button>
    </Container>
    <Footer />
  </Box>
);

export default NotFound;
