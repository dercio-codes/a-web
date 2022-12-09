import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";
export const FavouriteShowsContext = createContext();
const api = "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        if (state.includes(action.bucket)) {
          return state;
        }
      console.log("favourites", state);
      async function AddToFavourite(){

        const showRes = await axios.put(api + "/edit-show", {
              Title: action.bucket.Title,
              likes: action.bucket.likes ? action.bucket.likes++ : 1,
            });
        const userRes = await axios.put(api + '/edit-account',{
          email : action.userAccount.email,
          favourites : [...action.userAccount.favourites,action.bucket]
        });
        console.log('user res',userRes)
      }
      AddToFavourite()

      return  [...state, action.bucket];
    case "REMOVE":
      const newArr = [...state];
      newArr.splice(action.index, 1);
      return  newArr;
    default:
      throw new Error(`unkown action ${action.type}`);
  }
};

export const FavouriteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    
      <FavouriteShowsContext.Provider value={{state,dispatch}}>
        {children}
      </FavouriteShowsContext.Provider>
  );
};

