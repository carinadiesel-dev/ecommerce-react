import StoreIcon from "@mui/icons-material/Store";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import heroImg from "../assets/hero.jpg";

const HomePage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        height: "55rem",
        [theme.breakpoints.down("md")]: {
          height: "45rem",
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          height: "90vh",
        },
      }}
    >
      <Box
        width={{ sm: "100%", md: "50%", xl: "40%" }}
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPositionY: -50,
          [theme.breakpoints.down("lg")]: {
            backgroundPositionY: 0,
            backgroundPositionX: -50,
          },
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      ></Box>
      <Box
        width={{ sm: "100%", md: "50%", xl: "60%" }}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 8,
          [theme.breakpoints.down("lg")]: {
            padding: 5,
          },
          [theme.breakpoints.down("sm")]: {
            height: "100%",
            justifyContent: "space-around",
          },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontFamily: "inter",
            fontSize: "8rem",
            lineHeight: "8.3rem",
            [theme.breakpoints.down("xl")]: {
              fontSize: "7rem",
              lineHeight: "7.3rem",
            },
            [theme.breakpoints.down("lg")]: {
              fontSize: "5.5rem",
              lineHeight: "6.3rem",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "4.5rem",
              lineHeight: "5rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "5.3rem",
              lineHeight: "6rem",
            },
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
          width={{ md: "90%", lg: "80%", xl: "90%" }}
          sx={{
            fontSize: "1.8rem",
            color: "white",
            fontFamily: "barlow",
            textAlign: "center",
            [theme.breakpoints.down("xl")]: {
              fontSize: "1.6rem",
            },
            [theme.breakpoints.down("lg")]: {
              fontSize: "1.5rem",
            },
            [theme.breakpoints.down("md")]: {
              fontSize: "1.4rem",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "1.5rem",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          assumenda dolorum, iusto laudantium eum harum, explicabo qui debitis
          veritatis totam asperiores.
        </Typography>
        <Link
          href="/products"
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
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
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            Shop Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
