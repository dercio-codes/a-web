import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ShowsContext = createContext([]);

export const ShowsProvider = ({ children }) => {
  const [configData, setConfigData] = useState({});
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState({
    showItem: { Item: {} },
    showJson: {
      episodes: [],
    },
  });
  
  useEffect(() => {
    fetch(
      "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-config"
    )
      .then((res) => res.json())
      .then((data) => {
        async function getJson() {
          const response = await axios.get(data.configJsonData);
          console.log("the json =>", response.data);
          setConfigData(response.data);
          console.log("this my show=>", configData);
        }
        getJson();
      })
      .catch((err) => console.log(err.message));

    async function getShows() {
      if (shows.length) return;
      const showResponse = await axios.get(
        "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-shows"
      );
      setShows(showResponse.data);
    }
    getShows();
  }, []);
  async function getShow(title) {
    const response = await axios.get(
      `https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-show/${title}`
    );
    setShow(response.data);
  }
  const payload = {
    configData,
    setConfigData,
    shows,
    getShow,
    show,
  };

  return (
    <ShowsContext.Provider value={payload}>{children}</ShowsContext.Provider>
  );
};

export default ShowsProvider;
