import React from 'react';
import styled from 'styled-components';

type TextProps = {
  content: string;
};

const StyledText = styled.p`
  font-size: 14px;
  color: #666;
`;

const Text: React.FC<TextProps> = ({ content }) => (
  <StyledText>{content}</StyledText>
);

export default Text;
