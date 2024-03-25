import React from "react";

const About = () => {
  return (
    <div className="bg-[#DDE6ED] flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <div className="mb-10">
        <p className="text-center m-4 text-3xl">About the Harvest Hub:</p>

        <div>
          <p className="text-center">
            From Farm to Table, Every Grain Counts “HARVEST HUB” Revolutionizing
            Crop Storage and Management.
          </p>
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
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:mx-auto max-w-screen-lg">
          <div className="flex flex-col items-center text-center w-96 mb-8 md:mb-0">
            <img
              className="w-56 h-56 mb-4"
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p>Sandeep Kumar Patel</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>FullStack Web Developer</p>
            <div className="flex justify-center md:justify-between gap-5">
              <p>Github</p>
              <p>Linkedin</p>
              <p>Twitter</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-96">
            <img
              className="w-56 h-56 mb-4"
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p>Indramani Mehar</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>IoT Developer</p>
            <div className="flex justify-center md:justify-between gap-5">
              <p>Github</p>
              <p>Linkedin</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <p className="text-center m-4 text-3xl">About the Team:</p>
        <div className="w-full h-screen">
          <div className="flex flex-col items-center text-center w-96">
            <img
              className="w-56 h-56"
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p>Sandeep Kumar Patel</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>FullStack Web Developer</p>
            <div className="flex justify-between gap-5">
              <p className="">Github</p>
              <p className="">Linkedin</p>
              <p>Twitter</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-96">
            <img
              className="w-56 h-56"
              src="https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <p>Indramani Mehar</p>
            <p>
              Final Year Student at Kirodimal Institute of Technology, Raigarh
            </p>
            <p>FullStack Web Developer</p>
            <div className="flex justify-between gap-5">
              <p className="">Github</p>
              <p className="">Linkedin</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
