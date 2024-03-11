import "./App.css";
import BatchTable from "./components/BatchTable";
import StatusChart from "./components/StatusChart";
import { Container, Grid, Typography } from "@mui/material";
import WaitTimeChart from "./components/WaitTimeChart";
import ProgressDetails from "./components/ProgressDetails";

function App() {
    return (
        <Container maxWidth={false}>
            <header
                style={{ backgroundColor: "black", marginBottom: "2.5rem" }}
            >
                <Typography variant="h1" sx={{ color: "white" }}>
                    Furnace Dashboard
                </Typography>
            </header>
            <main>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3} xl={3}>
                        <ProgressDetails />
                    </Grid>
                    <Grid item xs={12} lg={5} xl={5}>
                        <StatusChart />
                        <WaitTimeChart />
                    </Grid>
                    <Grid item xs={12} lg={4} xl={4}>
                        <BatchTable />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

export default App;
