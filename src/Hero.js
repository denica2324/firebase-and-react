import React from "react";



const Hero = ({ handleLogOut }) => {
    return (
        <div>
            
            <button className="LogOut" onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
};

export default Hero;
