import React from 'react';
import './Card.scss';

interface IProps {
    children?: React.ReactNode;
    className?: string;
    flat?: boolean;
    badge?: JSX.Element;
    dark?: boolean;
    withoutPadding?: boolean;
}

const Card = (props: IProps): JSX.Element => {
    const { children, className, flat, badge, dark, withoutPadding } = props;

    return (
        <div
            className={`${withoutPadding ? '' : 'p-3 py-4 p-sm-4 p-xl-5'} position-relative app-card ${
                flat && 'flat'
            } ${dark && 'dark'} ${className}`}
        >
            <div className="badge-position">{badge}</div>
            {children}
        </div>
    );
};

export default Card;
