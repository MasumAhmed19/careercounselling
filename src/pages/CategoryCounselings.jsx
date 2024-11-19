import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryCounselings = () => {
    const { serviceData } = useContext(AuthContext); 
    const { catName } = useParams(); // Extract the dynamic `:catName` from the route
    const [tempData, setTempData] = useState([]);

    useEffect(() => {
        if (serviceData) {
            const filteredData = serviceData.filter(
                el => el.category.toLowerCase() === catName.toLowerCase()
            );
            setTempData(filteredData); 
        }
    }, [catName, serviceData]);

    return (
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
            {tempData.length > 0 ? (
                tempData.map(el => <Card key={el.id} service={el} />) // Use a unique key
            ) : (
                <p className="text-center text-gray-500">
                    No counseling services found for this category.
                </p>
            )}
        </div>
    );
};

export default CategoryCounselings;
