import "./App.css";
import BatchTable from "./components/BatchTable";
import StatusChart from "./components/StatusChart";
import { Container, Grid, Typography } from "@mui/material";
import WaitTimeChart from "./components/WaitTimeChart";
import ProgressDetails from "./components/ProgressDetails";

function App() {
    return (
        <Container maxWidth={false}>
            <header style={{backgroundColor: "black"}}>
                <Typography variant="h1" sx={{color: "white"}}>Furnace Dashboard</Typography>
            </header>
            <main>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <ProgressDetails />
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <StatusChart />
                        <WaitTimeChart />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <BatchTable />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

export default App;
