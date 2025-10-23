import React from 'react'
import styled from "styled-components";
import { objectives } from '../assets/objectives';
const ObjectivesListItems = () => {
  return (
    <>
{ objectives.map((objective) => (
    <ObjectiveFeature key={objective.id}>
      <div style={{ width: "40px", height: "40px" }}>{objective.icon}</div>
      <div>
        <h3>{objective.title}</h3>
        <p>{objective.description}</p>
      </div>
    </ObjectiveFeature>
))}
    </>
  )
}

const ObjectiveFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
        font-size: 1.2rem;
    text-align: justify;
  }
`;

export default ObjectivesListItems