
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div className='hover:bg-red-500 p-4 rounded-xl '>
            
            <li><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;