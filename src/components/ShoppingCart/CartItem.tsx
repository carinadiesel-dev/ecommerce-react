import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import testImg from "../../assets/womensClothing.jpg";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export default function CartItem() {
  const theme = useTheme();
  const {
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  } = useShoppingCartContext();

  return (
    <Card sx={{ display: "flex", backgroundColor: theme.palette.primary.dark }}>
      <CardMedia component="img" sx={{ width: 151 }} image={testImg} />
      <Box width={"100%"}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{
              fontFamily: "inter",
              fontSize: "24px",
              fontWeight: 500,
              margin: 0,
            }}
          >
            Product Name
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: 400,
              color: "grey",
              margin: 0,
            }}
          >
            Item Cost Per Unit
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
            }}
          >
            <IconButton aria-label="decrease quantity" color="info">
              <RemoveCircleIcon />
            </IconButton>
            <Box
              width={40}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Typography sx={{ color: "black", fontWeight: 800 }}>
                1
              </Typography>
            </Box>

            <IconButton aria-label="increase quantity" color="info">
              <AddCircleIcon />
            </IconButton>
            <IconButton aria-label="next"></IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: 150,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "20px",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Total :
            </Typography>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "24px",
                fontWeight: 400,
                marginLeft: 0,
              }}
            >
              $ 500
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
