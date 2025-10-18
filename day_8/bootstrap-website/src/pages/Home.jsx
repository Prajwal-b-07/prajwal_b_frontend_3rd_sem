import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function Home() {
    return (
        <div className="text-center">
            
            <Hero 
                textColor = "light"
                paraSize = "font-size-4"
            />
            <h2 className="text-DARK">CARS AVAILABLE</h2>
            <div className="row my-3">
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "BMW"
                    cardTitle = "Enterprise Resource Planning"
                    titleColor = "primary"
                    textColor = "dark"
                    cardText = "ERP is used to manage the enterprise resources in the efficient manner."
                    textSize = "font-size-2"
                    linkContent =  "Buy Now"
                    buttonColor = "outline-primary"
                    backgroundColor = "dark"
                    />
                </div>
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "PORSHE"
                    cardTitle = "Customer Relationship Management"
                    titleColor = "danger"
                    textColor = "secondary"
                    cardText = "CRM is a system that helps to manage interactions with customers and prospects to improve relationships."
                    textSize = "font-size-2"
                    linkContent =  "Buy Now"
                    buttonColor = "outline-danger"
                    backgroundColor = "dark"
                    />
                </div>
                <div className="col-md-4">
                    <Cards 
                    cardHeading = "LAMBORGHINI"
                    cardTitle = "Customized Websites"
                    titleColor = "success"
                    textColor = "dark"
                    cardText = "We provide highly responsive website with all the industry standard design."
                    textSize = "font-size-2"
                    linkContent = "Buy Now"
                    buttonColor = "outline-success"
                    backgroundColor = "dark"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;