import React from "react";

function ProfileCard({ name, rm, photo, about }) {

    return (
        <div className="w-[400px] bg-white rounded-md overflow-hidden shadow-md hover:-translate-y-1 select-none transition-all">
            <div className="w-full h-[160px] bg-orange-600 flex justify-center items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-white relative overflow-hidden  ">
                    <img 
                    src={photo} 
                    alt="Arthur Takamori Picture" 
                    className="w-full h-full object-cover flex"
                    />
                </div>
            </div>
            <div className="py-10 px-8 grid grid-cols-1 gap-6">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-semibold text-orange-600">{name}</h3>
                    <p className="font-semibold text-gray-700">RM:{rm}</p>
                </div>
                <p className="text-center text-gray-500 text-center text-sm">{about}</p>
            </div>
        </div>
    );

}



export default ProfileCard;