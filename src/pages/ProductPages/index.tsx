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
    <Box
      sx={{ backgroundColor: theme.palette.secondary.main, overflow: "hidden" }}
    >
      <Box
        height={"60rem"}
        sx={{
          display: "flex",
          backgroundImage: `url(${productsHeaderImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: -100,
          [theme.breakpoints.down("xl")]: {
            backgroundPositionY: -50,
            backgroundPositionX: -150,
          },
          [theme.breakpoints.down("lg")]: {
            backgroundPositionX: -400,
          },
          [theme.breakpoints.down("md")]: {
            backgroundImage: "none",
          },
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
            [theme.breakpoints.down("xl")]: {
              width: "50%",
              height: 450,
              marginTop: 18,
            },
            [theme.breakpoints.down("lg")]: {
              height: 600,
              marginTop: 5,
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
              boxShadow: "none",
            },
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
              [theme.breakpoints.down("xl")]: {
                fontSize: "5rem",
                lineHeight: "5.5rem",
              },
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
                [theme.breakpoints.down("xl")]: {
                  fontSize: "5rem",
                  lineHeight: "5.5rem",
                  gap: 2,
                },
                [theme.breakpoints.down("lg")]: {
                  fontSize: "3.5rem",
                  lineHeight: "4rem",
                },
              }}
            >
              You'll <img src={loveImg} height={100} /> Love
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 6,
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                gap: 4,
              },
            }}
          >
            <Link href={"/products/all-products"}>
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
                  [theme.breakpoints.down("xl")]: {
                    width: "15rem",
                  },
                  [theme.breakpoints.down("lg")]: {
                    width: "100%",
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
                  [theme.breakpoints.down("xl")]: {
                    width: "15rem",
                  },
                  [theme.breakpoints.down("lg")]: {
                    width: "100%",
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
