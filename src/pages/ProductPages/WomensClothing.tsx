import {
  Alert,
  Box,
  Container,
  Grid,
  Snackbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function WomensClothingPage() {
  const theme = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useShoppingCartContext();
  const fetchProductData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
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

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        Women's Clothing
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
                  onClick={() => {
                    addToCart(product), setOpen(true);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          sx={{ display: "flex", alignItems: "center" }}
          color="info"
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Item successfully added to cart
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
