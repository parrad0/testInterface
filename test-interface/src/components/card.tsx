/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */

import { useAppDispatch, useAppSelector } from '../rtk/hooks/hook';
import { update } from '../rtk/reducer/app';

/* eslint-disable react/react-in-jsx-scope */
function Card({ cmp } : any) {
  // Dispatch an Action from our Reducer
  const dispatch = useAppDispatch();
  const tile = useAppSelector((state) => state.app.test);
  // Listen the variable on our Reducer
  //   const tiles = useAppSelector((state) => state.app.test);
  // Prints the variable of our Reducer
  // Also triggers update Action
  return (
    <>
      <div onClick={() => dispatch(update('Everis'))}>
        {cmp}
      </div>
      <p>{tile}</p>
    </>
  );
}
export default Card;
