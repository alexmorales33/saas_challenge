import React, { useState } from 'react';
import { DropdownProps } from './types';
import { DropdownButton, DropdownContainer, DropdownContent, DropdownItem } from './styles';

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  const selectedDisplayName = options.find(option => option.name === selectedOption)?.displayName || '';

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        {selectedDisplayName}
      </DropdownButton>
      <DropdownContent $isOpen={isOpen}>
        {options.map(option => (
          <DropdownItem key={option.name} onClick={() => handleOptionClick(option.name)}>
            {option.displayName}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
