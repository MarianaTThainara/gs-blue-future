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

            <div className="h-full flex justify-center items-center bg-black bg-opacity-50 p-12">

                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-white font-bold uppercase mb-2">{mainTitle}</h1>
                    <p className="text-xl text-gray-300">{subTitle}</p>

                    <hr className="w-10 my-6 border-2 border-gray-600 rounded-full"/>

                    <button onClick={handleButtonClick} className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 cursor-pointer">
                        {buttonText}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;