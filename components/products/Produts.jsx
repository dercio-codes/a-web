import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";
import { productData } from "./Data";

const Produts = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        padding: "16px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container>
        {productData.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            sx={{
              p: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProductCard
              productImg={product.image}
              productName={product.title}
              productPrice={`R ${product.price}`}
              productDescription={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Produts;
