import React from 'react';

type TableFooterProps = {
    children: React.ReactNode;  // Accept any type of React nodes
};

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
    return <tfoot>{children}</tfoot>;
};

export default TableFooter;
