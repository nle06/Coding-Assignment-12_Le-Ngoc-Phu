import React from 'react';
import styled from 'styled-components';

type LabelProps = {
  text: string;
  htmlFor?: string;
};

const StyledLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>
);

export default Label;
