import React, {Fragment} from 'react';

import spinner from './spinner-bean.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img 
                src={spinner} 
                alt="loading"
                style={{
                        width : '200px',
                        margin : 'auto',
                        display: 'block',
                        position: 'absolute',
                        left : '50vw',
                        top : '40vh'
                    }}
            />
        </Fragment>
    )
}

export default Spinner