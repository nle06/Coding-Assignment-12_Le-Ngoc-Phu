import React from 'react';
import styled from 'styled-components';

type CardProps = {
  title: string;
  content: string;
  imageSrc?: string;
  disabled?: boolean;
};

const StyledCard = styled.div<{ disabled: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: ${props => (props.disabled ? '#f2f2f2' : '#fff')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.3s;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const StyledTitle = styled.h3`
  margin: 16px 0 8px;
`;

const StyledContent = styled.p`
  margin: 0;
`;

const Card: React.FC<CardProps> = ({ title, content, imageSrc, disabled = false }) => (
  <StyledCard disabled={disabled}>
    {imageSrc && <StyledImage src={imageSrc} alt={title} />}
    <StyledTitle>{title}</StyledTitle>
    <StyledContent>{content}</StyledContent>
  </StyledCard>
);

export default Card;
