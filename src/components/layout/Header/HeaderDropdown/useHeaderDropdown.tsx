import { useState, useRef, useEffect, RefObject } from 'react';

interface UseDropdownResult {
  isOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement>;
  handleToggleDropdown: () => void;
}

const useHeaderDropdown = (): UseDropdownResult => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    dropdownRef,
    handleToggleDropdown,
  };
};

export default useHeaderDropdown;

