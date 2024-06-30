import React from 'react';
import styled from 'styled-components';

type DropdownProps = {
  options: string[];
  disabled?: boolean;
};

const StyledSelect = styled.select<{ disabled: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${props => (props.disabled ? '#f2f2f2' : '#fff')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled = false }) => (
  <StyledSelect disabled={disabled}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
