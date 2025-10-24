import React from "react";
import styled from "styled-components";
import { brands } from "../assets/products";

const ProductCard = () => {
  return (
    <>
      <Grid cols="3" alignItems="center">
        {brands.map((brand) => (
          <Card key={brand.id}>
            <CardContent>
              {/* <CardTitle style={{ color: "#111827" }}>{product.name}</CardTitle> */}
              {/* <CardDescription>{product.description}</CardDescription> */}
              <img src={brand.image} alt={brand.name} style={{height: "100px", width: "270px"}} />
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

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;
 */
export default ProductCard;
