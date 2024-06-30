import React from 'react';

type TableHeaderProps = {
    children: React.ReactNode;  // Ensure children can be any React node
};

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
    return <thead>{children}</thead>;
};

export default TableHeader;
