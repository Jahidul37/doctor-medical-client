
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const DoctorService = () => {
  
  // show a all doctor service data in api

  const [doctorService, setDoctorService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctor")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDoctorService(data);
      });
  }, []);

  
  return (
     
    <div className="bg-base-100 py-10">
      <div className=" text-center mb-4">
        <h3 className=" text-2xl text-orange-500 font-bold">Our Services</h3>
        <h2 className=" text-3xl font-bold">Our Doctor Service Catergory</h2>
      </div>
      <div className=" ml-10 gap-6 mt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {doctorService?.map((services) => (
          
          <>
            <div className="card w-96  bg-slate-50 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={services.serviceImg} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p className=" text-orange-400 text-xl">Name: {services.doctorName}</p>
                <h2 className="card-title">Service: {services.service}</h2>
                <div className="card-actions">
                  
                  {/* single service details data route */}
                  <Link to={`/service/${services._id}`}>
            <button className="btn btn-primary">Service Details</button>
          </Link>
                </div>
              </div>
            </div>
          </>
 ))}
      </div>
    </div>
  );
};

export default DoctorService;
