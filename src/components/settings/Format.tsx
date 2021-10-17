import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setFormat, getFormat } from '../../slices/settingsSlice';
import useDropdown from '../../hooks/useDropdown';
import { ReactComponent as IconCaret } from '../../assets/icons/caret.svg';

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
        <IconCaret />
      </DropdownHeader>

      {isDropdownOpen && (
        <DropdownList>
          {options.map((option) => (
            <Button
              type="button"
              onClick={() => {
                dispatch(setFormat(option));
                setIsDropdownOpen(false);
              }}
              key={option}
            >
              {option}
            </Button>
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
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
`;

const DropdownHeader = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  & > svg {
    margin-left: 0.25rem;
  }
`;

const DropdownList = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.secondary};
  background: ${(props) => props.theme.text_bright};
  max-height: 30rem;
  z-index: 5;
  width: 100%;
  text-align: start;
`;

const Button = styled.button`
  text-align: start;
  font-weight: 300;
  text-transform: uppercase;
  padding: 0.1rem 0.5rem;

  &:hover {
    background: ${(props) => props.theme.secondary}15; // (color with 0.15 opacity)
  }
`;

export default Format;
