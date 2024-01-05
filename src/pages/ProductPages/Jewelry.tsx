import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function JewelryPage() {
  const theme = useTheme();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const parsedResponse = await response.json();
      setProducts(parsedResponse);
      console.log(parsedResponse);
    } catch (error) {
      console.log("error finding product", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        paddingY: 7,
      }}
    >
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
        Jewelry
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 8 }}
          justifyContent="center"
          alignItems="center"
        >
          {products.map((product, index) => {
            return (
              <Grid item key={index}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
