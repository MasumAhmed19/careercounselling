
const DualHeading = ({f, s}) => {
    console.log(f, s)
    return (
        <div>
            <h2 className="text-3xl md:text-5xl text-white">{f} <span className="text-[#CBFF54]">{s}</span></h2>
        </div>
    );
};

export default DualHeading;