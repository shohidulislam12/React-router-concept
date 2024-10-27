import { FaCheckSquare } from "react-icons/fa";


const Features = ({feature}) => {

    return (
        <div className="text-left ">
      <p className="flex gap-5"><FaCheckSquare className="text-white" />{feature}</p>
        </div>
    );
};

export default Features;