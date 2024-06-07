import React from "react";

function ProfileCard({ name, rm, photo, about }) {
 
    return (
        <div className="w-[400px] bg-white rounded-md overflow-hidden shadow-md">
            <div className="w-full h-[160px] bg-orange-600 flex justify-center items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-white relative overflow-hidden  ">
                    <img 
                    src={photo} 
                    alt="Arthur Takamori Picture" 
                    className="w-full h-full object-cover flex"
                    />
                </div>
            </div>
            <div className="py-10 px-6 grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-semibold text-orange-600">{name}</h3>
                    <p className="font-semibold text-gray-700">RM:{rm}</p>
                </div>
                <p className="text-center text-gray-500">{about}</p>
                <div className="flex items-center justify-center">
                    <span className="mx-2 w-[40px] h-[40px] rounded-full bg-[#1DA1F2] flex items-center justify-center">
                        <i className="fa-brands fa-twitter text-white"></i>
                    </span>

                    <span className="mx-2 w-[40px] h-[40px] rounded-full bg-[#0077b5] flex items-center justify-center">
                        <i className="fa-brands fa-linkedin text-white"></i>
                    </span>

                    <span className="mx-2 w-[40px] h-[40px] rounded-full bg-[#24292e] flex items-center justify-center">
                        <i className="fa-brands fa-github text-white"></i>
                    </span>
                </div>
                <div className="flex justify-center ">
                    <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold uppercase text-sm">Contact Me</button>
                </div>
            </div>
        </div>
    );

}



export default ProfileCard;