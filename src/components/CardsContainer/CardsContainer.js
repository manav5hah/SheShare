import React from "react";
import Card from "../Cards/Card";

function CardsContainer({ AirbnbData }) {
    return (
        <div>
            <div className="grid grid-cols-3 justify-items-center" >
                {AirbnbData.map((property, index) => {
                    return <Card key={index} className="" imagArray={property.images} name={property.name} location={property.location} rate_per_night={property.rate_per_night} />;
                })}
            </div>
        </div>
    );
}

export default CardsContainer;
