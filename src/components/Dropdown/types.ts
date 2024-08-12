export interface DropdownOption {
  name: string;
  displayName: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}
