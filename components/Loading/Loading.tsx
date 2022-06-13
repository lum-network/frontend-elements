import React from 'react';

import './Loading.scss';

const Loading = (): JSX.Element => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
