import React from 'react';
import QRCode from 'qrcode.react';
import logoDark from 'frontend-elements/assets/images/logoDark.svg';

interface IProps {
    content: string;
    size?: number;
    color?: string;
}

const CodeQR = (props: IProps): JSX.Element => {
    const { content, size: sizeProps, color } = props;
    const size = sizeProps || 80;
    const logoSize = size / 4.0;

    return (
        <QRCode
            size={size}
            value={content}
            fgColor={color || '#2E2E2E'}
            level={'Q'}
            includeMargin={false}
            imageSettings={{
                src: logoDark,
                height: logoSize,
                width: logoSize,
                excavate: true,
            }}
        />
    );
};

export default CodeQR;
