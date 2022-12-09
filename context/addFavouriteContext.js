import React, { useReducer, useContext, createContext } from "react";

const FavourtieStateContext = createContext();
const FavouriteDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        console.log(state)
      return [...state, action.bucket];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    default:
      throw new Error(`unkown action ${action.type}`);
  }
};

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <FavouriteDispatchContext.Provider value={dispatch}>
      <FavourtieStateContext.Provider value={state}>
        {children}
      </FavourtieStateContext.Provider>
    </FavouriteDispatchContext.Provider>
  );
};

export const useFavourite = () => useContext(FavourtieStateContext);
export const useDispatchFavourite = () => useContext(FavouriteDispatchContext);
