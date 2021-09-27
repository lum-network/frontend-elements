import React from 'react';
import './Table.scss';

interface IProps {
    children?: React.ReactNode;
    className?: string;
    head: string[];
}

const Table = (props: IProps): JSX.Element => {
    const { head, children, className } = props;
    const limitLeft = head.length / 2;

    return (
        <div className={`table-responsive ${className}`}>
            <table className="table app-table-striped table-borderless">
                <thead>
                    <tr>
                        {head.map((value: string, index) => (
                            <th className={limitLeft <= index ? 'text-end' : 'm-4'} key={index}>
                                {value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default Table;
