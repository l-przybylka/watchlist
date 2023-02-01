import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const DataTable = ({
    rows,
    columns
}) => {
    return (
        <DataGrid rows={rows} columns={columns} getRowHeight={() => 'auto'} />
    )
}

export default DataTable