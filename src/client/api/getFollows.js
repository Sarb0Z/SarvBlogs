import axios from "axios";

export default function getFollows(setFollows) {
  const token = localStorage.getItem("auth-token");
  console.log(token);

  (async () => {
    try {
      const follows = await axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/follows`,
        headers: { Authorization: `Bearer ${token}` },
        
      });
      setFollows(JSON.stringify(follows.data));
    //   alert(follows.data);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
