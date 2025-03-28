import './PageWrapper.scss';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
    return (
        <div className='ia-pagewrapper'>
            {children}
        </div>
    )
}

PageWrapper.propTypes = {
    children: PropTypes.node
}

export default PageWrapper