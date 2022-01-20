import { Divider } from '@mui/material';
import React, { Fragment } from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <Fragment>
            <div className="mb-2">
                <h1> {title}</h1>
                <p className="fw-lighter">
                    {subtitle}
                </p>
            </div>
            <Divider variant="middle" />
        </Fragment>
    );
};

export default Title;
