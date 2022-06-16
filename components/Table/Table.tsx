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
    onPageChange?: (page: number) => void;
}

const Table = (props: IProps): JSX.Element => {
    const { head, children, className, pagination, onPageChange } = props;
    const limitLeft = head.length / 2;

    const renderPagination = () => {
        if (!pagination || !onPageChange) {
            return null;
        }

        const { page, hasPreviousPage, hasNextPage } = pagination;

        if (page === undefined) {
            return null;
        }

        return (
            <div className="pe-4 pe-xl-5 d-flex justify-content-end">
                <ul className="pagination">
                    <li className={`page-item ${hasPreviousPage ? '' : 'disabled'}`}>
                        <a onClick={() => onPageChange(page - 1)} className="page-link pointer">
                            Previous
                        </a>
                    </li>
                    {hasPreviousPage && (
                        <li className="page-item">
                            <a onClick={() => onPageChange(page - 1)} className="page-link pointer">
                                {page - 1}
                            </a>
                        </li>
                    )}
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">{page}</span>
                    </li>
                    {hasNextPage && (
                        <li className="page-item">
                            <a onClick={() => onPageChange(page + 1)} className="page-link pointer">
                                {page + 1}
                            </a>
                        </li>
                    )}
                    <li className={`page-item ${hasNextPage ? '' : 'disabled'}`}>
                        <a onClick={() => onPageChange(page + 1)} className="page-link pointer">
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
