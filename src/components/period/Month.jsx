import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, quantity, measure, percentage) {
    return { name, quantity, measure, percentage };
}

const rows = [
    createData("Toughened", 18016, "kg", 2351.16),
    createData("Broken", 776, "Kg", 0),
    createData("Available", 8034.527, "Kg", 0),
    createData("Idle", 4055.83, "min", 0),
];

function selectArrows(value) {
    if (value < 0) {
        return <img src="./icon-down.svg" alt="" />;
    } else if (value === 0) {
        return <span>-</span>;
    } else {
        return <img src="./icon-up.svg" alt="" />;
    }
}

export default function Month() {
    return (
        <TableContainer component={Paper} elevation={6}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="left"
                            sx={{
                                fontWeight: 800,
                            }}
                        >
                            Month
                        </TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.measure}</TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                            >
                                {selectArrows(row.percentage)}
                                {row.percentage}%
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
