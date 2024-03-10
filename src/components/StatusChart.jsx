import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";
import TougheningOptions from "./TougheningOptions";

const data = [
    {
        name: "00:00",
        toughened: 624,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "01:00",
        toughened: 583,
        target: 1000,
        average: 157.92,
        broken: 118,
    },
    {
        name: "02:00",
        toughened: 701,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "03:00",
        toughened: 144,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "04:00",
        toughened: 677,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "05:00",
        toughened: 663,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "06:00",
        toughened: 286,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "07:00",
        toughened: 52,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "08:00",
        toughened: 60,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "09:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "10:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "11:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "12:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "13:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "14:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "15:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "16:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "17:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "18:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "19:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "20:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "21:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "22:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
    {
        name: "23:00",
        toughened: 0,
        target: 1000,
        average: 157.92,
        broken: 0,
    },
];

function StatusChart() {
    return (
        <Box sx={{ flexBasis: "50%" }}>
            <h2>Status</h2>
            <TougheningOptions />
            <ResponsiveContainer
                width="100%"
                height="100%"
                minHeight={300}
                minWidth={400}
            >
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis
                        label={{
                            value: "Kilograms",
                            angle: -90,
                            position: "insideLeft",
                        }}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="target"
                        fill="#8884d8"
                        stroke="#8884d8"
                    />
                    <Bar
                        dataKey="toughened"
                        stackId={"a"}
                        barSize={20}
                        fill="#413ea0"
                    />
                    <Bar
                        dataKey="broken"
                        stackId={"a"}
                        barSize={20}
                        fill="#ff0de3"
                    />
                    <Line type="monotone" dataKey="average" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </Box>
    );
}

export default StatusChart;