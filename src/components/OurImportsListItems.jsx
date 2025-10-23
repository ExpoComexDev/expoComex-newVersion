import React from "react";
import styled from "styled-components";
import { importMethods } from "../assets/importMethods";

const OurImportsListItems = () => {
  return (
    <>
      <Grid cols="3">
        {importMethods.map((importMethod) => (
          <Card key={importMethod.id}>
            <CardContent>
              <div>{importMethod.icon}</div>
              <CardTitle style={{ color: "#111827" }}>
                {importMethod.title}
              </CardTitle>
              <CardDescription>{importMethod.description}</CardDescription>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
    font-size: 1.2rem;
`;

export default OurImportsListItems;
