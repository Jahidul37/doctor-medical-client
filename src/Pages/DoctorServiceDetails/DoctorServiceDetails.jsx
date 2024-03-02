import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorServiceDetails = () => {
// aita hocce service details data dekave 
// show a single data in  service details in data
    const {id} = useParams()
    const  [serviceDetails, setServiceDetaisl]= useState({})
    useEffect (()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setServiceDetaisl(data)
            console.log(data);
        })
        },[])

    return (
//         <div className="hero min-h-screen bg-base-100 shadow-xl">
//   <div className="hero-content flex-col lg:flex-row gap-16 border p-16 shadow rounded-lg drop-shadow-2xl bg-slate-300">
//     <img src={serviceDetails.serviceImg} className="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       
//     </div>
//   </div>
// </div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={serviceDetails.serviceImg} alt="Shoes" /></figure>
  <div className="card-body">
  <h1 className="text-3xl font-bold"><strong>Services:</strong> {serviceDetails.service}</h1>
      <p className="py-2"><strong>Service Title:</strong> {serviceDetails.service_details}</p>
      <p className="py-2"><strong>Service Category:</strong> {serviceDetails.service_details}</p>
     <p className="py-2"><strong>Price:</strong> {serviceDetails.price}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

    );
};

export default DoctorServiceDetails;