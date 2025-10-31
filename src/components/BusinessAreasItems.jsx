import React from "react";
import styled from "styled-components";
import { businessAreas } from "../assets/businessAreas";

const BusinessAreasListItems = () => {
  return (
    <>
      <Grid $cols="2">
        {businessAreas.map((businessArea) => (
          <CommitmentItem key={businessArea.id}>
            <CommitmentIcon $bgColor={businessArea.bgColor}>
              <img 
                src={businessArea.image} 
                alt={`${businessArea.title} - Área de negocio de Expocomex SRL`} 
                loading="lazy"
                width={100}
                height={100}
                style={{ height: "100px", width: "100px" }} 
              />
            </CommitmentIcon>
            <CommitmentTitle>{businessArea.title}</CommitmentTitle>
            <CommitmentDescription>
              {businessArea.description1}
            </CommitmentDescription>
            <CommitmentDescription>
              {businessArea.description2}
            </CommitmentDescription>
            <CommitmentDescription>
              {businessArea.description3}
            </CommitmentDescription>
            <CommitmentDescription>
              {businessArea.description4}
            </CommitmentDescription>
          </CommitmentItem>
        ))}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: ${(props) =>
    props.$cols === "2"
      ? "repeat(2, 1fr)"
      : props.$cols === "3"
        ? "repeat(3, 1fr)"
        : props.$cols === "4"
          ? "repeat(4, 1fr)"
          : "1fr"};
  }

  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
`;

const CommitmentItem = styled.div`
  text-align: center;
`;

const CommitmentIcon = styled.div`
  background: ${(props) => props.$bgColor || "#2563eb"};
  border-radius: 50%;
  height: 12rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const CommitmentTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;

        @media (min-width: 1245px) {
      font-size: 1.8rem;
    }
`;

const CommitmentDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
      font-size: 1.1rem;

            @media (min-width: 1245px) {
      font-size: 1.2rem;
    }
`;

export default BusinessAreasListItems;
