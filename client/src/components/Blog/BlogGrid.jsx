import React from "react";
import BlogGridContent from "./BlogGridContent";

import "./BlogGrid.scss";

function BlogGrid(props) {
  const blogGridContent = {
    title: "Lorem IPSUM DOLOR AMET CONSECTETUER",
    url: "url",
  };

  return (
    <div>
      <div className="blog_container" id="blog_container">
        <div className="blog_box1 blog_box">
          <BlogGridContent
            title={blogGridContent.title}
            url={blogGridContent.url}
          />
        </div>
        <div className="dummy_gap_vert"></div>
        <div className="blog_sub_container">
          <div className="blog_box2 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
          <div className="dummy_gap_horz"></div>
          <div className="blog_box3 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
        </div>
        <div className="dummy_gap_vert"></div>
        <div className="blog_sub_container">
          <div className="blog_box2 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
          <div className="dummy_gap_horz"></div>
          <div className="blog_box3 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
        </div>
        <div className="dummy_gap_vert"></div>
        <div className="blog_box1 blog_box">
          <BlogGridContent
            title={blogGridContent.title}
            url={blogGridContent.url}
          />
        </div>
        <div className="dummy_gap_vert"></div>
        <div className="blog_sub_container">
          <div className="blog_box2 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
          <div className="dummy_gap_horz"></div>
          <div className="blog_box3 blog_box">
            <BlogGridContent
              title={blogGridContent.title}
              url={blogGridContent.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
