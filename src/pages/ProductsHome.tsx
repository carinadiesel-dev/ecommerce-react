import { Box, Button, Typography, useTheme } from "@mui/material";
import loveImg from "../assets/love.png";
import productsHeaderImg from "../assets/productsHeaderImg.jpg";

const ProductsHomePage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        height: "40rem",
      }}
    >
      <Box
        width={"50%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.light,
              fontWeight: "800",
              fontFamily: "inter",
              fontSize: "8rem",
              lineHeight: "8.3rem",
              textAlign: "center",
            }}
          >
            Products{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "inherit",
                fontSize: "6rem",
                fontWeight: "inherit",
                lineHeight: "6.5rem",
                color: "white",
              }}
            >
              You'll <img src={loveImg} height={120} /> Love
            </Typography>
          </Typography>
        </Box>
        <Button
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
          Shop All Products
        </Button>
      </Box>
      <Box
        width={"50%"}
        sx={{
          backgroundImage: `url(${productsHeaderImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
    </Box>
  );
};

export default ProductsHomePage;
