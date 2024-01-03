import { Box, Button, Typography, useTheme } from "@mui/material";
import heroImg from "../assets/hero.jpg";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", overflow: "hidden", height: "61rem" }}>
      <Box
        width="50%"
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPositionY: -210,
        }}
      ></Box>
      <Box
        width="50%"
        sx={{
          backgroundColor: "#131d23",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          gap: 8,
        }}
      >
        <Typography
          sx={{
            color: "#d279eb",
            fontWeight: "800",
            fontFamily: "inter",
            fontSize: "5.5rem",
            lineHeight: "6rem",
          }}
        >
          New Year,{" "}
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              color: "white",
            }}
          >
            New Looks
          </Typography>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.8rem",
            color: "#864b98",
            fontFamily: "serif",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          assumenda dolorum, iusto laudantium eum harum, explicabo qui debitis
          veritatis totam asperiores, corporis ex? Labore recusandae suscipit
          cumque explicabo praesentium.
        </Typography>
        <Button
          size="large"
          sx={{
            backgroundColor: "#d279eb",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.5,

            "&:hover": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
