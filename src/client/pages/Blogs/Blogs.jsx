import { useEffect, useState } from "react";
import getFollows from "../../api/getFollows";
import "./Blogs.scss"

const Blogs = () => {
  // const [follows, setFollows] = useState("");
  // useEffect(() => {
  //   getFollows(setFollows);
  // }, []);
  return (
  <div className="blog-page-container">
    <div className="top-tag"></div>
    <div className="top-tag-title">Latest</div>
    <div className="sidebar-container">
      <div className="image-container-1" style={{
              background: `url('${process.env.PUBLIC_URL}/images/add_circle.png')`,
            }}>
      </div>
      <div className="image-tag-1">
            Add
      </div>
      <div className="image-container-2" style={{
              background: `url('${process.env.PUBLIC_URL}/images/search.png')`,
            }}>
      </div>
      <div className="image-tag-2">
          Search
      </div>
    </div>
    <div className="main-scrollable">
      <div className="date">
banana
      </div>
      <div className="title">
icecream
      </div>
      <div className="paragraph">
chocolate
      </div>
      <div className="author">
        @singer
      </div>
    </div>

  </div>
  );
};

export default Blogs;
