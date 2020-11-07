import React from "react";

import "./BlogGridContent.scss";

function BlogGridContent(props) {
  return (
    <div className="blog_box_content">
      <p className="blog_box_text">{props.title}</p>
      <a className="blog_box_learn" href={props.url}>
        Learn More >
      </a>
    </div>
  );
}

export default BlogGridContent;
