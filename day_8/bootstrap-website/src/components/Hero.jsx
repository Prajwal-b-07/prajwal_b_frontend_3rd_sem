import React from "react";

function Hero(props) {
    const {
        title = "PREMIUM CARS , HONEST DEALS.",
        subTitle = "ZEXPR is a delaship with a vast selection of high-quality vehicles. Browse inventory, schedule a test drive, or trade in your car. We make buying and servicing seamless.",
        buttonText = "Learn More",
        buttonColor = "light",
        backgroundColor = "dark",
        textColor = "secondary",
        centered = true,
        onButtonClick,
        paraSize = "font-size-3"
    } = props;

    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            alert("Button clicked!");
        }
    };

    const containerClass = `bg-${backgroundColor} text-${textColor} p-5 rounded-3 ${centered ? 'text-center' : ''}`;

    return (
        <div className={containerClass}>
            <h1 className="display-3 fw-bold">{title}</h1>
            <p className={paraSize}>{subTitle}</p>

            {buttonText && (
            <button className={`btn btn-${buttonColor} mt-3`} onClick={handleButtonClick}>{buttonText}</button>
            )}
        </div>
    );
}

export default Hero;