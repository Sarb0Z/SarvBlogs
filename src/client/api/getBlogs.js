import axios from "axios";

export default function getBlogs(blogs, setBlogs) {
  const token = localStorage.getItem("auth-token");
  (async () => {
    try {
      const blogs = await axios.request({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/blogs`,
        headers: { Authorization: `Bearer ${token}` },
      });
      const data= JSON.stringify(blogs.data);
      var obj = JSON.parse(data);
      var res = [];
      alert(obj);
      for (var i in obj) res.push(obj[i]);
      alert(res);
      setBlogs(res);
      
      
      //   alert(follows.data);
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  })();
}
