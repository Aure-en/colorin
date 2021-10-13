import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getMainPalette, setPalette } from "../slices/paletteSlice";

const BasicFunction: FC = (props) => {
  const dispatch = useAppDispatch();
  const mainPalette = useAppSelector(getMainPalette);

  return (
    <ReactSortable list={mainPalette} setList={(newPalette) => dispatch(setPalette(newPalette))}>
      {mainPalette.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>

  );
};

export default BasicFunction;
