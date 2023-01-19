import React from 'react';
import './Table.scss';

interface IProps {
    children?: React.ReactNode;
    className?: string;
    customPagination?: string;
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
    const { head, children, className, pagination, onPageChange, customPagination } = props;
    const limitLeft = head.length / 2;

    const renderPagination = () => {
        if (!pagination || !onPageChange) {
            return null;
        }

        const { page, hasPreviousPage, hasNextPage, pagesTotal } = pagination;

        if (page === undefined || pagesTotal === undefined) {
            return null;
        }

        return (
            <div className={`pe-3 d-flex justify-content-end ${customPagination}`}>
                <ul className="pagination">
                    <li className={`page-item ${hasPreviousPage ? '' : 'disabled'}`}>
                        <a onClick={() => onPageChange(page - 1)} className="page-link pointer">
                            Previous
                        </a>
                    </li>
                    {hasPreviousPage && page > 1 && (
                        <li className="page-item">
                            <a onClick={() => onPageChange(0)} className="page-link pointer">
                                0 ...
                            </a>
                        </li>
                    )}
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
                    {hasNextPage && page < pagesTotal - 2 && (
                        <li className="page-item">
                            <a onClick={() => onPageChange(pagesTotal - 1)} className="page-link pointer">
                                ... {pagesTotal - 1}
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
        <>
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
            {renderPagination()}
        </>
    );
};

export default Table;
