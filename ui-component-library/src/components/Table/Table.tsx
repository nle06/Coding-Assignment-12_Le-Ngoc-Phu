import React from 'react';

interface TableProps {
    children: React.ReactNode;  // Ensures any valid React node can be passed as children
}

const Table: React.FC<TableProps> = ({ children }) => {
    return <table>{children}</table>;
};

export default Table;
