import React from 'react';
import About from "../../public/About.png";
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
       <>
          <div>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img
      src={About}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">
      About Us
At [Your Company Name], we are passionate about helping individuals and organizations stay organized, achieve their goals, and enhance productivity. Founded on the principles of innovation, efficiency, and user-centric design, our mission is to create tools that simplify task management and streamline workflows.

Our Mission
Our mission is to empower users with intuitive solutions that make managing tasks and achieving goals effortless. We believe that with the right tools, anyone can stay ahead and accomplish more, whether in academics, professional life, or personal projects.

Our Vision
We envision a world where task management is no longer a chore but a seamless part of everyday life. Our goal is to continuously innovate and provide solutions that adapt to the evolving needs of our users.

Why Choose Us?
User-Friendly Interface: Our platform is designed with simplicity in mind, making it easy for anyone to get started.
Innovative Features: We incorporate the latest technologies to offer features that enhance productivity.
Dedicated Support: Our team is always here to help, ensuring you have the best experience possible.
Continuous Improvement: We are committed to listening to our users and constantly improving our offerings.
Our Story
Founded in [Year], [Your Company Name] started with a simple idea: to create a task management solution that anyone can use to stay organized and achieve their goals. Over the years, we have grown into a trusted platform for users worldwide, thanks to our dedication to quality and user satisfaction.

Join us on our journey to make task management smarter, simpler, and more effective. Together, let's stay organized and stay ahead!


      </p>
      <Link to="/Newuser" className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
          </div>
        </>
  )
}

export default Aboutus
