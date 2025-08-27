import React from "react";
import styled from "styled-components";
import { products } from "../assets/products";

const ProductCard = () => {
  return (
    <>
      <Grid cols="3" alignItems="center">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent>
              <CardTitle style={{ color: "#111827" }}>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.cols === "2"
        ? "repeat(2, 1fr)"
        : props.cols === "3"
        ? "repeat(3, 1fr)"
        : props.cols === "4"
        ? "repeat(4, 1fr)"
        : "1fr"};
  }

  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    transform: translateY(-8px);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

export default ProductCard;
