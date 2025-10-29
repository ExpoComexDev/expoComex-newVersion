import React from "react";
import styled from "styled-components";
import { brands } from "../assets/products";

const ProductCard = () => {
  return (
    <>
      <Grid>
        {brands.map((brand) => (
          <Card key={brand.id}>
            <CardContent>
              {/* <CardTitle style={{ color: "#111827" }}>{product.name}</CardTitle> */}
              {/* <CardDescription>{product.description}</CardDescription> */}
              <img src={brand.image} alt={brand.name} style={{height: brand.height, width: brand.width}} />
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center; 
  
  & > * {
    width: 100%;
  }

  @media (min-width: 769px) {
    & > * {
      width: calc(50% - 1rem); 
    }
  }

  @media (min-width: 1150px) {
    & > * {
      width: calc(33.33% - 1.333rem); 
    }
  }

  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  max-width: 380px;

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    transform: translateY(-8px);
  }

  @media (max-width: 769px) {
    max-width: 100%;
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
