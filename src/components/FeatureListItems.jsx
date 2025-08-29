import React from "react";
import styled from "styled-components";
import { features } from "../assets/features";
import { CheckCircle } from "lucide-react";

const FeatureListItems = () => {
  return (
    <>
      {features.map((feature) => (
        <FeatureItem key={feature.id}>
          <CheckCircle
            size={24}
            color="#10b981"
            style={{ marginTop: "0.8rem", flexShrink: 0 }}
          />
          <FeatureContent>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureContent>
        </FeatureItem>
      ))}
    </>
  );
};

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const FeatureContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
    text-align: justify;
  }
`;

export default FeatureListItems;
