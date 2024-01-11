import { Box, Chip, Link, useTheme } from "@mui/material";
import { ReactNode } from "react";

export default function CategoryCard({
  title,
  image,
  link,
}: {
  title: string;
  image: ReactNode;
  link: string;
}) {
  const theme = useTheme();
  return (
    <Link href={link} sx={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          height: 250,
          width: 500,
          borderRadius: "20px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: 4,
          [theme.breakpoints.down("sm")]: {
            width: "80vw",
          },
        }}
      >
        <Chip
          label={title}
          color="secondary"
          sx={{
            margin: 1,
            fontSize: "20px",
            fontWeight: 600,
            padding: 3,
            textDecoration: "none",
            backgroundColor: theme.palette.primary.dark,

            "&:hover, &:focus": {
              backgroundColor: theme.palette.primary.light,
              textDecoration: "none",
              color: theme.palette.secondary.main,
            },
          }}
        />
      </Box>
    </Link>
  );
}
