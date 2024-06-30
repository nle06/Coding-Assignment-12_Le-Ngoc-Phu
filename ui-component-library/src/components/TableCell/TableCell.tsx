import React from 'react';

type TableCellProps = {
    children: React.ReactNode;
};

const TableCell: React.FC<TableCellProps> = ({ children }) => {
    return <td>{children}</td>;
};

export default TableCell;
