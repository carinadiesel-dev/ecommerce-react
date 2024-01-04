import StoreIcon from "@mui/icons-material/Store";
import { Box, Button, Typography, useTheme } from "@mui/material";
import heroImg from "../assets/hero.jpg";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", overflow: "hidden", height: "55rem" }}>
      <Box
        width="40%"
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPositionY: -50,
        }}
      ></Box>
      <Box
        width="60%"
        sx={{
          backgroundColor: theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 8,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontFamily: "inter",
            fontSize: "8rem",
            lineHeight: "8.3rem",
          }}
        >
          New Year,{" "}
          <Typography
            sx={{
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              color: theme.palette.primary.light,
            }}
          >
            New Looks
          </Typography>
        </Typography>
        <Typography
          variant="h5"
          width={"80%"}
          sx={{
            fontSize: "1.8rem",
            color: "white",
            fontFamily: "barlow",
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          assumenda dolorum, iusto laudantium eum harum, explicabo qui debitis
          veritatis totam asperiores.
        </Typography>
        <Button
          startIcon={<StoreIcon />}
          size="large"
          sx={{
            backgroundColor: theme.palette.primary.light,
            color: "white",
            fontWeight: "bold",
            width: "18rem",
            paddingY: 2,

            "&:hover": {
              backgroundColor: theme.palette.secondary.light,
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
