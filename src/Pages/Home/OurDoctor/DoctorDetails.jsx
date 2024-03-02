import React from "react";

// This is the doctor details data card.

const DoctorDetails = ({ doctor }) => {
  const { doctorName, doctorImg, doctorService } = doctor;
  // console.log(doctorImg);
  return (
    <div className="card w-96 bg-slate-50 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={doctorImg} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{doctorName}</h2>
        <p className=" text-orange-400 text-xl">{doctorService}</p>
        <div className="card-actions">
          {/* <Link to={`/checkout/${_id}`}>
            {" "}
            <button className="btn btn-primary">Book Now</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
