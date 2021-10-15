import React, { useState, useEffect } from 'react';

interface Return {
  isDropdownOpen: boolean,
  setIsDropdownOpen: (value: boolean) => void,
}

function useDropdown(ref: React.MutableRefObject<HTMLElement | undefined>): Return {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown if clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (ref && !ref?.current?.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener to close the dropdown on outside click when it is open.
  useEffect(() => {
    if (!isDropdownOpen) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
  };
}

export default useDropdown;
