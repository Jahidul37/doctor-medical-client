import React, { useEffect, useState } from "react";
import DoctorDetails from "./DoctorDetails";

// this is the Doctor details page.
// all doctor Details data here and map.

const OurDoctor = () => {
  const [doctorData, setDoctorData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/doctor")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDoctorData(data);
      });
  }, []);
  return (
    <div className=" my-4 mx-10 ">
      <div className=" text-center mb-4">
        <h3 className=" text-2xl text-orange-500 font-bold">Our Doctors</h3>
        <h2 className=" text-3xl font-bold">Our Doctor Serve</h2>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctorData?.map((doctor) => (
          // doctor details data card in doctor details page
          <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
        ))}
      </div>
    </div>
  );
};

export default OurDoctor;
