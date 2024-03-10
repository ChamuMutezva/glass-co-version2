import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

function  WaitTimeChart() {
    const data = [{ name: "2024-03-07", total: 205.38 }];
    return (
        <div>
            <BarChart width={400} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    label={{
                        value: "Date",
                        position: "insideBottomRight",
                        offset: 0,
                        bottom: 20,
                    }}
                />
                <YAxis
                    label={{
                        value: "Minutes",
                        angle: -90,
                        position: "insideLeft",
                    }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" width={"100%"} />
            </BarChart>
        </div>
    );
}

export default WaitTimeChart;
