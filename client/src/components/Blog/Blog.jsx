import React from "react";
import BlogAbstract from "./BlogAbstract";
import BlogGrid from "./BlogGrid";

import "./Blog.scss";

function Blog(props) {
  return (
    <div>
      <BlogAbstract />
      <BlogGrid />
    </div>
  );
}

export default Blog;
