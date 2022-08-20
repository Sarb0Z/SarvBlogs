import axios from "axios";

export default function verifyUser(userData) {
  (async () => {
    try {
      const user = await axios.request({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users/login/`,
        data: userData
      });
      alert(user.data.token);
      localStorage.setItem('auth-token', user.data.token);
 
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
