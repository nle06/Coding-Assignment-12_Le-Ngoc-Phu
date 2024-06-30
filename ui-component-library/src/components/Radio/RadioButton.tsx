import React from 'react';
import styled from 'styled-components';

type RadioButtonProps = {
  name: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
};

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRadioButton = styled.input<{ disabled: boolean }>`
  margin: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ name, options, disabled = false }) => (
  <StyledRadioGroup>
    {options.map((option, index) => (
      <label key={index}>
        <StyledRadioButton
          type="radio"
          name={name}
          value={option.value}
          disabled={disabled}
        />
        {option.label}
      </label>
    ))}
  </StyledRadioGroup>
);

export default RadioButton;
