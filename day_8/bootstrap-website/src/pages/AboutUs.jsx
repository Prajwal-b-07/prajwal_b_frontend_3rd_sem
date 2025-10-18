import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

function AboutUs() {
    const handleContactUs = () => {
        alert("Redirecting to contact us page...");
    };

    return (
        <div className="text-center">
            <h1 className="text-warning">About Us Page</h1>
            <Hero
                title="About ZEXPER"
                subTitle="We are your trusted destination for premium automobiles. We specialize in offering a wide selection of top global car brands, including luxury, sports, and family vehicles all under one roof."
                buttonText="Contact Us"
                textColor = "danger"
                buttonColor="primary"
                onButtonClick={handleContactUs}
                paraSize="font-size-4"
            />

            <div className="row mt-5">
                <div className="col-md-3">
                    <Cards />
                </div>
                <div className="col-md-9">
                    <h3>Our Mission</h3>
                    <p>Welcome to ZEXPR , your trusted destination for premium automobiles. We specialize in offering a wide selection of top global car brands, including luxury, sports, and family vehicles all under one roof.

    Our mission is simple: to connect drivers with the perfect car that fits their lifestyle, budget, and passion. Whether you’re looking for the elegance of a BMW, the innovation of Mercedes-Benz, the power of Audi, or the reliability of , we’ve got you covered.

    At ZEXPR, we believe buying a car should be an exciting and effortless experience. That’s why we provide transparent pricing, trusted pre-owned options, and personalized service that puts your needs first.

    Driven by integrity, quality, and customer satisfaction, we are committed to helping every customer drive away with confidence and a smile.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;