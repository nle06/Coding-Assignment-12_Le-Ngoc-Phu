import React from 'react';

type TableRowProps = {
    children: React.ReactNode;  // Accept any type of React nodes
};

const TableRow: React.FC<TableRowProps> = ({ children }) => {
    return <tr>{children}</tr>;
};

export default TableRow;
