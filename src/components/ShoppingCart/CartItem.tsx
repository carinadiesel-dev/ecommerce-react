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
  // onClickDecrease: () => void;
};

export default function CartItem({
  id,
  productName,
  unitCost,
  quantity,
  total,
  image,
}: // onClickDecrease,
CartItemProps) {
  const theme = useTheme();
  const {
    cartQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  } = useShoppingCartContext();

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
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          width: 200,
          height: 180,
          paddingX: 1,
          paddingY: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            width: 160,
            // maxWidth: 150,
            maxHeight: 150,
          }}
          image={image}
        />
      </Box>
      <Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{
              fontFamily: "inter",
              fontSize: "22px",
              fontWeight: 500,
              margin: 0,
              maxWidth: 300,
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
            // alignItems: "center",
            justifyContent: "space-between",
            pl: 1,
            pb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              //   pl: 1,
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
              //   width: 200,
              pr: 2,
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
                // marginLeft: 0,
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
                // marginLeft: 0,
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
