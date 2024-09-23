import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to Blogify, your go-to platform for insightful and engaging blog posts on technology, coding, and web development. Whether you're looking to learn new skills, stay updated on the latest trends, or find inspiration for your projects, Blogify offers a wide range of content tailored to developers and tech enthusiasts alike. Dive into tutorials, tips, and in-depth articles designed to make learning accessible and enjoyable. Join our community and explore the world of tech, one blog post at a time.
        </p>
        <p>
        At Blogify, we believe in the power of sharing knowledge to drive innovation and creativity. Our mission is to provide a comprehensive resource for developers and tech enthusiasts, offering a blend of practical tutorials, expert tips, and thought-provoking articles. Whether you're just starting out or you're a seasoned professional, Blogify is designed to be a space where learning meets inspiration. We cover everything from web development and coding best practices to the latest trends in technology, ensuring you stay ahead in the fast-evolving digital landscape. Join us as we explore new ideas, tackle challenges, and build a community of curious minds eager to learn and grow.
        </p>
        <p>
        Join us on this journey as we explore the ever-changing world of technology, one blog post at a time. Let’s create, innovate, and push the boundaries of what’s possible together.
        </p>
      </div>
    </article>
  );
};

export default About;