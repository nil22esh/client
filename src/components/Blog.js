//Blogging App using Hooks
import { useState, useRef, useEffect } from "react";
import Row from "./Row";

export default function Blog() {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  }

  function removeBlog(i) {
    setBlogs(blogs.filter((blog, index) => i !== index));
  }

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No Blog!!";
    }
  });

  return (
    <>
      <h1>Write a Blog!</h1>
      <div className="section">
        <form onSubmit={handleSubmit}>
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      <h2> Blogs </h2>
      {blogs.map((blog, i) => {
        return (
          <div key={i} className="blog">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="blog-btn">
              <button className="btn remove" onClick={() => removeBlog(i)}>
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
