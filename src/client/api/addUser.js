import axios from "axios";

// import { getArtistsCache, setArtistsToCache } from '../Cache/artistsCache';

export default function addUser(userData) {
  (async () => {
    try {
      const user = await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users`,
        data: userData,
      });
      alert(user);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
