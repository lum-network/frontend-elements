import React from 'react';
import './Button.scss';
import Loading from '../Loading/Loading';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    onPress: () => void;
    className?: string;
    loading?: boolean;
}

const Button = (props: IProps): JSX.Element => {
    const { children, onPress, outline, className, loading } = props;

    return (
        <div
            onClick={!loading ? onPress : () => null}
            className={`app-btn ${outline ? 'app-btn-outline' : 'app-btn-plain'} ${className}`}
        >
            {loading ? <Loading /> : children}
        </div>
    );
};

export default Button;
