import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        py: 4,
      }}
    >
      <Typography variant="body1" color="white">
        Fake Store | Designed & Developed by Carina Diesel &copy;
      </Typography>
    </Box>
  );
};

export default Footer;
