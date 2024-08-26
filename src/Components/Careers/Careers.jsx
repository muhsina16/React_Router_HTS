import "./careers.css";

const Careers = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className=" text-gray-800 py-20 flex flex-col items-center">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">
            We are looking for talented individuals who are passionate about
            technology and innovation. Explore our open positions and become a
            part of our growing family.
          </p>
          <h1 className="text-4xl font-bold">Our Mission</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">
            {" "}
            At HTS, our mission is to drive innovation and create solutions that
            make a difference. We believe in empowering our employees to grow
            and thrive in an inclusive environment.
          </p>
          <h1 className="text-3xl font-bold">join us on</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">
            http://HTS/careers/Frontend
          </p>
        </div>
      </div>
    </>
  );
};

export default Careers;
