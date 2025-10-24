import React from "react";
import styled from "styled-components";
import { features } from "../assets/features";
import { CheckCircle } from "lucide-react";

const AboutUsListItems = () => {
  return (
    <>
      {features.map((feature) => (
        <FeatureItem key={feature.id}>
          <CheckCircle
            size={32}
            color="#10b981"
            style={{ marginTop: "1.2rem", flexShrink: 0 }}
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
    font-size: 1.8rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 0.5rem;

      @media (min-width: 1245px) {
      font-size: 2rem;
    }
  }

  p {
    color: #6b7280;
    font-size: 1rem;
    line-height: 1.6;
    text-align: justify;

      @media (min-width: 1245px) {
      font-size: 1.2rem;
    }
  }
`;

export default AboutUsListItems;
