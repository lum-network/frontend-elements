import React from 'react';
import './Table.scss';

interface IProps {
    children?: React.ReactNode;
    className?: string;
    head: string[];
    pagination?: {
        hasNextPage?: boolean;
        hasPreviousPage?: boolean;
        pagesTotal?: number;
        page?: number;
    };
}

const Table = (props: IProps): JSX.Element => {
    const { head, children, className, pagination } = props;
    const limitLeft = head.length / 2;

    const renderPagination = () => {
        if (!pagination) {
            return null;
        }

        return (
            <div className="pe-4 pb-4 pe-xl-5 pb-xl-5 d-flex justify-content-end">
                <ul className="pagination">
                    <li className={`page-item ${pagination.hasPreviousPage ? '' : 'disabled'}`}>
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        );
    };

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
            {renderPagination()}
        </div>
    );
};

export default Table;
