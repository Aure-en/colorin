import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setFormat, getFormat } from '../../slices/settingsSlice';
import useDropdown from '../../hooks/useDropdown';

const Format: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const format = useAppSelector(getFormat);
  const ref = useRef<HTMLElement>(); // To close dropdown on click outside.
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown(ref);
  const options = ['hex', 'hsl', 'rgb'];

  return (
    <Dropdown ref={ref}>
      <DropdownHeader
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div>{format}</div>
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {options.map((option) => (
            <button
              type="button"
              onClick={() => {
                dispatch(setFormat(option));
                setIsDropdownOpen(false);
              }}
            >
              {option}

            </button>
          ))}
        </DropdownList>
      )}
    </Dropdown>
  );
};

const Dropdown = styled.div<{
  ref: any
}>`
  position: relative;
  display: inline-block;
  margin-left: 1rem;
  z-index: 5;
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
`;

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.text};
  max-height: 30rem;
  z-index: 5;
  font-size: 0.75rem;
`;

export default Format;
