import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function ContactUs() {
    const handleCall = () => {
        alert("Calling ZEXPER Team...");
    };
    return (
        <div className="text-center">
            <Hero
                title="Contact Us"
                buttonText="Call Us"
                buttonColor="outline-light"
                onButtonClick={handleCall}
                paraSize="font-size-3"
            />
            <div className="row my-3">
                <div className="col-md-4">
                    <Cards />;
                </div>
                <div className="col-md-4">
                    <Cards />
                </div>
                <div className="col-md-4">
                    <Cards />
                </div>
               
            </div>
        </div>
    );
}

export default ContactUs;