import React from 'react';
import placeholderValidator from '../../assets/images/placeholderValidator.svg';

interface IProps {
    githubUrl: string;
    chainId: string;
    validatorAddress: string;
    githubBranchName?: string;
    width: number;
    height: number;
    className?: string;
    logoExtension?: string;
}

export const ValidatorLogo = ({
    githubBranchName = 'master',
    githubUrl,
    chainId,
    validatorAddress,
    width,
    height,
    className,
    logoExtension = 'png',
}: IProps): JSX.Element => {
    const url = `${githubUrl}/raw/${githubBranchName}/${chainId}/${validatorAddress}.${logoExtension}`;

    return (
        <img
            alt=""
            width={width}
            height={height}
            src={url}
            onError={(event) => {
                event.currentTarget.src = placeholderValidator;
                event.currentTarget.className = `rounded-circle placeholder-image ${className}`;
            }}
            className={`rounded-circle ${className}`}
        />
    );
};

export default ValidatorLogo;
