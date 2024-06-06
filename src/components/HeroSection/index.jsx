const HeroSection = ({ backgroundImage, mainTitle, subTitle, buttonText, buttonTarget }) => {
    
    const handleButtonClick = () => {
        const targetElement = document.getElementById(buttonTarget);
        console.log(targetElement)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div
            className="hero-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-4xl text-white font-bold">{mainTitle}</h1>
                <p className="text-xl text-gray-300 mt-4">{subTitle}</p>
                <button onClick={handleButtonClick} className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default HeroSection;