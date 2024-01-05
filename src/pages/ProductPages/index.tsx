import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import electronicsImg from "../../assets/electronics.jpg";
import jewelryImg from "../../assets/jewelry.jpg";
import loveImg from "../../assets/love.png";
import mensClothingImg from "../../assets/mensClothing.jpg";
import productsHeaderImg from "../../assets/productsHeaderImg.jpg";
import womensClothingImg from "../../assets/womensClothing.jpg";
import CategoryCard from "../../components/CategoryCard";

type Category = {
  title: string;
  image: ReactNode;
  link: string;
};

const ProductsHomePage = () => {
  const theme = useTheme();

  const categories: Category[] = [
    {
      title: "Electronics",
      image: `${electronicsImg}`,
      link: "/products/electronics",
    },
    {
      title: "Jewelry",
      image: `${jewelryImg}`,
      link: "/products/jewelry",
    },
    {
      title: "Men's Clothing",
      image: `${mensClothingImg}`,
      link: "/products/mens-clothing",
    },
    {
      title: "Women's Clothing",
      image: `${womensClothingImg}`,
      link: "/products/womens-clothing",
    },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Box
        height={"60rem"}
        sx={{
          display: "flex",
          backgroundImage: `url(${productsHeaderImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: -100,
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: 550,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: theme.palette.secondary.main,
            marginLeft: 10,
            marginTop: 15,
            borderRadius: "20px",
            boxShadow: 4,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.light,
              fontWeight: "800",
              fontFamily: "inter",
              fontSize: "8rem",
              lineHeight: "8.5rem",
              textAlign: "center",
            }}
          >
            Products{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 4,
                fontFamily: "inherit",
                fontSize: "6rem",
                fontWeight: "inherit",
                lineHeight: "6.5rem",
                color: "white",
                paddingTop: 3,
              }}
            >
              You'll <img src={loveImg} height={120} /> Love
            </Typography>
          </Typography>
          <Box sx={{ display: "flex", gap: 6 }}>
            <Link>
              <Button
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  color: "white",
                  fontWeight: "bold",
                  width: "18rem",
                  paddingY: 2,
                  boxShadow: 2,

                  "&:hover": {
                    backgroundColor: theme.palette.secondary.light,
                  },
                }}
              >
                Shop All Products
              </Button>
            </Link>
            <Link href="#shopByCategory">
              <Button
                size="large"
                sx={{
                  backgroundColor: theme.palette.secondary.light,
                  color: "white",
                  fontWeight: "bold",
                  width: "18rem",
                  paddingY: 2,
                  boxShadow: 2,

                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
              >
                Shop By Category
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Container id="shopByCategory" sx={{ paddingY: 10 }}>
        <Typography
          sx={{
            gap: 4,
            fontSize: "6rem",
            fontWeight: 600,
            lineHeight: "6.5rem",
            color: "white",
            paddingBottom: 7,
            textAlign: "center",
            textShadow: 4,
          }}
        >
          Shop By Category
        </Typography>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            py: 5,
          }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsHomePage;
