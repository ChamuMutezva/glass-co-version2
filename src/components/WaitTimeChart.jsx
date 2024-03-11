import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function WaitTimeChart() {
    const data = [{ name: "2024-03-07", total: 205.38 }];
    return (
        <div>
            <ResponsiveContainer width={"100%"} minWidth={250} height={300}>
                <BarChart width={"100%"} height={300} minWidth={250} data={data}>
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
            </ResponsiveContainer>
        </div>
    );
}

export default WaitTimeChart;
