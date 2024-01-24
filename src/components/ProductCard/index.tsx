import { Box, Button, CardMedia, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  image: string;
  onClick: () => void;
};

export default function ProductCard({
  title,
  price,
  image,
  onClick,
}: ProductCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        borderRadius: "20px",
        padding: 3,
        [theme.breakpoints.down("xl")]: {
          width: 300,
        },
        [theme.breakpoints.down("lg")]: {
          width: 250,
        },
        [theme.breakpoints.down("md")]: {
          width: 300,
        },
        [theme.breakpoints.down("sm")]: {
          width: "75vw",
        },
      }}
    >
      <Box
        height={"4.5rem"}
        sx={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            fontFamily: "inter",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: 800,
          }}
          sx={{
            maxHeight: "4.5rem",
            color: theme.palette.primary.dark,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingY: 4,
          height: 300,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            maxWidth: 350,
            maxHeight: 280,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingY: 1,
          paddingX: 2,
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: 4,
          },
        }}
      >
        <CardContent
          sx={{
            height: 25,
            display: "flex",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Typography
            variant="h5"
            color={theme.palette.primary.main}
            noWrap
            paragraph
            sx={{
              fontFamily: "inter",
              fontSize: "24px",
              fontWeight: 500,
              color: theme.palette.secondary.main,
              margin: 0,
            }}
          >
            $ {price}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            height: 25,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 0,
            [theme.breakpoints.down("sm")]: {
              justifyContent: "center",
            },
          }}
        >
          <Box>
            <Button
              size="large"
              onClick={onClick}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                width: "100%",
                fontWeight: "bold",
                px: 3,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                },
                [theme.breakpoints.down("sm")]: {
                  px: 13,
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
