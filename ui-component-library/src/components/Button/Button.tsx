import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  disabled?: boolean;
};

const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => (props.disabled ? '#d3d3d3' : '#007bff')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ label, disabled = false }) => (
  <StyledButton disabled={disabled}>{label}</StyledButton>
);

export default Button;
