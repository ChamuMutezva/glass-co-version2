// import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";
import { DATA } from "../data";

function BatchTable() {
    console.log(DATA);
    const columns = [
        { field: "id", headerName: "Batch", width: 70 },
        { field: "startWaitTime", headerName: "Start Wait Time", width: 130 },
        { field: "endWaitTime", headerName: "End Wait Time", width: 130 },
        {
            field: "totalMinutes",
            headerName: "Total(Minutes)",
            width: 100,
            type: "number",
        },
    ];
    const rows = DATA;
    return (
        <Card elevation={3}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </Card>
    );
}

export default BatchTable;
