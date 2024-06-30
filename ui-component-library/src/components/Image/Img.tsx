import React from 'react';
import styled from 'styled-components';

type ImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
};

const StyledImg = styled.img<{ disabled: boolean }>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => (
  <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />
);

export default Img;
