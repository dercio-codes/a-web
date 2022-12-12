import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";
import { USER_CONTEXT } from "./MainContext";
export const FavouriteShowsContext = createContext();
const api = "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.includes(action.bucket)) {
        return state;
      }
      async function AddToFavourite() {
        const showRes = await axios.put(api + "/edit-show", {
          Title: action.bucket.Title,
          likes: action.bucket.likes ? action.bucket.likes++ : 1,
        });
        const userRes = await axios.put(api + "/edit-account", {
          email: action.userAccount.email,
          favourites: [...action.userAccount.favourites, action.bucket],
        });
      }
      AddToFavourite();
      return action.userAccount.favourites;
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      async function RemoveFromFavourites() {
        await axios.put(api + "/edit-show", {
          Title: action.bucket.Title,
          likes: action.bucket.likes ? action.bucket.likes-- : 1,
        });
        await axios.put(api + "/edit-account", {
          email: action.userAccount.email,
          favourites: newArr,
        });
      }
      RemoveFromFavourites();
      return action.userAccount?.favourites;
    default:
      throw new Error(`unkown action ${action.type}`);
  }
};

export const FavouriteProvider = ({ children }) => {
  const { userAccount } = useContext(USER_CONTEXT);
  console.log("user account", userAccount);
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <FavouriteShowsContext.Provider value={{ state, dispatch }}>
      {children}
    </FavouriteShowsContext.Provider>
  );
};
