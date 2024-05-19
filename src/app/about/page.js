import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import sandy from "../../../public/sandy.jpg";
import indra from "../../../public/indramani.jpg";

const About = () => {
  return (
    <div className="bg-[#DDE6ED] flex min-h-screen flex-col items-center justify-between py-20 px-8">
      <div className="mb-10">
        <p className="text-center m-4 text-3xl">About the Harvest Hub:</p>

        <div>
          <p className="text-center">
            From Farm to Table, Every Grain Counts
            <strong> “HARVEST HUB” </strong> Revolutionizing Crop Storage and
            Management.
          </p>
          <br />
          <p>
            The project, Harvest Hub, is a comprehensive solution for
            agricultural crop storage management in India. It integrates IoT
            technology to monitor temperature and humidity levels in storage
            rooms, optimizing storage conditions for various crops. A
            user-friendly web application enables administrators to efficiently
            manage storage rooms, allocate crops, and plan logistics. Key
            features include shortest distance calculation for transportation
            routing, real-time alerts for storage condition deviations, and an
            analytics dashboard for performance tracking. Harvest Hub aims to
            minimize crop wastage, improve food security, and enhance the
            efficiency of the agricultural supply chain through innovation and
            technology.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-center m-4 text-3xl">About the Team:</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:justify-evenly text-center max-w-screen-lg mx-auto">
          {/* Cards */}
          <div className="flex flex-col items-center text-center mb-8 shadow-md bg-slate-100 p-4">
            <img
              className="w-full h-64 mb-4 object-fill"
              // src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={sandy.src}
            />
            <p>Sandeep Kumar Patel</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>FullStack Web and Android Developer</p>

            <hr className="m-2 border-black" />

            <div className="flex justify-center gap-5">
              <p>
                <a
                  href="https://github.com/sandyabhi"
                  className="flex items-center"
                >
                  <FaGithub className="mr-2" />
                  <span>Github</span>
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/sandy__abhi"
                  className="flex items-center"
                >
                  <FaXTwitter className="mr-2" />
                  <span>Twitter</span>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/sandeep-kumar-patel47/"
                  className="flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  <span>Linkedin</span>
                </a>
              </p>
              <p>
                <a
                  href="https://sandeeppatel.netlify.app"
                  className="flex items-center"
                >
                  <CiGlobe className="mr-2" />
                  <span>Website</span>
                </a>
              </p>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex flex-col items-center text-center mb-8 shadow-md bg-slate-100 p-4">
            <img
              className="w-full h-64 mb-4 object-cover"
              // src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={indra.src}
            />
            <p>Indramani Mehar</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>Iot Developer</p>

            <hr className="m-2 border-black" />

            <div className="flex justify-center gap-5">
              <p>
                <a href="#" className="flex items-center">
                  <FaGithub className="mr-2" />
                  <span>Github</span>
                </a>
              </p>

              <p>
                <a
                  href="https://www.linkedin.com/in/sandeep-kumar-patel47/"
                  className="flex items-center"
                >
                  <FaLinkedin className="mr-2" />
                  <span>Linkedin</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
