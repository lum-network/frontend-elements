import React from 'react';
import './Button.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    onPress: () => void;
    className?: string;
}

const Button = (props: IProps): JSX.Element => {
    const { children, onPress, outline, className } = props;

    return (
        <div onClick={onPress} className={`app-btn ${outline ? 'app-btn-outline' : 'app-btn-plain'} ${className}`}>
            {children}
        </div>
    );
};

export default Button;
