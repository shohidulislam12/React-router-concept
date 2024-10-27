import PropTypes from "prop-types";
import Features from "./Features";

const PriceOption = ({option}) => {
    const {features,name,price}=option
    return (
        <div className="bg-blue-600 rounded-xl p-6 flex flex-col   text-white ">
         <h2 className="text-center"> 

            <span className="text-2xl"> {price}</span>
            <span className="text-sm">/mon</span> <br />
            <span className="text-2xl">{name}</span>
           
            
         </h2>
         <div className=" flex flex-col flex-grow">
         {
                features.map(feature=><Features feature={feature}></Features>)
            }
         </div>
         <button className="btn bg-green-500  w-full hover:bg-white "> Buy now</button>
        </div>
    );
};

export default PriceOption;
PriceOption.propTypes={
    option: PropTypes.object.isRequired
 

}