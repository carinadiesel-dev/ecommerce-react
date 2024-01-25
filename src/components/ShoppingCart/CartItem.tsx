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
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

type CartItemProps = {
  id: number;
  productName: string;
  unitCost: string;
  quantity?: number;
  total?: number;
  image: string;
};

export default function CartItem({
  id,
  productName,
  unitCost,
  total,
  image,
}: CartItemProps) {
  const theme = useTheme();
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCartContext();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "20px",
        borderColor: theme.palette.primary.dark,
        borderWidth: 2,
        borderStyle: "solid",
        width: 500,
        height: 180,
        [theme.breakpoints.down("sm")]: {
          width: 430,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          width: 170,
          height: 180,
          paddingX: 1,
          paddingY: 2,
          [theme.breakpoints.down("sm")]: {
            width: 130,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: 160,
            maxHeight: 150,
            [theme.breakpoints.down("sm")]: {
              width: 120,
            },
          }}
          image={image}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{
              fontFamily: "inter",
              fontSize: "22px",
              fontWeight: 500,
              margin: 0,
              maxWidth: 290,
              [theme.breakpoints.down("sm")]: {
                fontSize: "20px",
                maxWidth: 250,
              },
            }}
            noWrap
          >
            {productName}
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
            $ {unitCost} Per Unit
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pb: 1,
            }}
          >
            <IconButton
              aria-label="decrease quantity"
              color="info"
              onClick={() => decreaseCartQuantity(id)}
            >
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
                {getItemQuantity(id)}
              </Typography>
            </Box>

            <IconButton
              aria-label="increase quantity"
              color="info"
              onClick={() => increaseCartQuantity(id)}
            >
              <AddCircleIcon />
            </IconButton>
            <IconButton aria-label="next"></IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pr: 3,
              pb: 1,
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "end",
              }}
            >
              Total :
            </Typography>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "end",
              }}
            >
              $ {total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
