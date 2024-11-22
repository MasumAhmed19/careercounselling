const BannerSection = ({ t }) => {
    return (
        <div
            className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(https://i.ibb.co.com/QkdtCWQ/herobg3.jpg)`,
            }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4">
                <div className="text-center flex items-center justify-center">
                    <p className="linktext text-center text-white duration-300 ease-in backdrop-blur-sm px-2 py-3 rounded-md ">Unlock Your Career Potential</p>
                </div>
                <h2 className="text-4xl md:text-6xl text-white  text-center mx-auto">{t}</h2>
            </div>
        </div>
    );
};

export default BannerSection;
