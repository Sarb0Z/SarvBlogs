import { useEffect, useState } from "react";
import getBlogs from "../../api/getBlogs";
import "./Blogs.scss";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs(blogs, setBlogs);
    console.log(blogs);
  }, []);
  return (
    <div className="blog-page-container">
      <div className="top-tag"></div>
      <div className="top-tag-title">Latest</div>
      <div className="sidebar-container">
        <div
          className="image-container-1"
          style={{
            background: `url('${process.env.PUBLIC_URL}/images/add_circle.png')`,
          }}
        ></div>
        <div className="image-tag-1">Add</div>
        <div
          className="image-container-2"
          style={{
            background: `url('${process.env.PUBLIC_URL}/images/search.png')`,
          }}
        ></div>
        <div className="image-tag-2">Search</div>
      </div>
      <div className="main-scrollable">
        {blogs.forEach((blog) => {
          return (
            <>
              <div className="date">{blog.updatedAt}</div>
              <div className="title">{blog.title}</div>
              <div className="paragraph">{blog.article}</div>
              <div className="author">{blog.author}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
