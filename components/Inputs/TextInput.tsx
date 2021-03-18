import React from 'react';
import './Input.scss';

interface IProps {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
    icon?: string;
    placeholder?: string;
}

const TextInput = (props: IProps): JSX.Element => {
    const { onChangeText, value, placeholder } = props;

    const renderIcon = (): JSX.Element | null => {
        const { icon } = props;

        if (!icon) {
            return null;
        }

        return <img alt="icon" className="icon-input" src={icon} />;
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        const { onSubmit } = props;

        e.preventDefault();

        onSubmit();
    };

    return (
        <form onSubmit={onSubmit} className="position-relative">
            {renderIcon()}
            <input
                type="text"
                className="text w-100"
                value={value}
                onChange={(event) => onChangeText(event.target.value)}
                placeholder={placeholder}
            />
        </form>
    );
};

export default TextInput;
