import React from "react";
import styled from "styled-components";
import { commitments } from "../assets/commitments";

const CommitmentListItems = () => {
  return (
    <>
      <Grid cols="4">
        {commitments.map((commitment) => (
          <CommitmentItem key={commitment.id}>
            <CommitmentIcon bgColor={commitment.bgColor}>
              {commitment.icon}
            </CommitmentIcon>
            <CommitmentTitle>{commitment.title}</CommitmentTitle>
            <CommitmentDescription>
              {commitment.description}
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

const CommitmentItem = styled.div`
  text-align: center;
`;

const CommitmentIcon = styled.div`
  background: ${(props) => props.bgColor || "#2563eb"};
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const CommitmentTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const CommitmentDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

export default CommitmentListItems;
