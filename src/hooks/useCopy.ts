import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addCopy, removeCopy } from '../slices/copySlice';
import copy from '../utils/copy';
import { Color } from '../ts/colors/colors';

const useCopy = () => {
  const dispatch = useDispatch();

  /**
   * Copy the color
   * Dispatch an action to update the store and create a 'Copied' pop-up
   * Dispatch an action in a set amount of time to remove the pop-up
   */
  const handleClick = (x: number, y: number, color: Color): void => {
    copy(color.hex);
    const id = nanoid();
    const copyToAdd = {
      x,
      y,
      id,
    };
    dispatch(addCopy(copyToAdd));
    setTimeout(() => dispatch(removeCopy(id)), 2000);
  };

  return {
    copy: handleClick,
  };
};

export default useCopy;
