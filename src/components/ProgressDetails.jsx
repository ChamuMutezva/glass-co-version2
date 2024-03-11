import { Container, Grid } from "@mui/material";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OneDay from "./period/OneDay";
import SevenDays from "./period/SevenDays";
import Month from "./period/Month";

function ProgressDetails() {
    const [location, setLocation] = useState("");
    const handleChange = (evt) => {
        setLocation(evt.target.value);
    };
    return (
        <Container
            component={Grid}
            container
            gap={4}
            style={{
                maxWidth: "100%",
                padding: 0,
            }}
        >
            <FormControl fullWidth component={Grid} item marginTop={"2rem"}>
                <InputLabel id="location-label">Warehouse</InputLabel>
                <Select
                    labelId="location-label"
                    id="location-select"
                    value={location}
                    label="Warehouse"
                    defaultValue="port-elizabeth"
                    onChange={handleChange}                   
                >
                    <MenuItem value={"johannesburg"}>Johannesburg</MenuItem>
                    <MenuItem value={"port-elizabeth"}>Port Elizabeth</MenuItem>
                    <MenuItem value={"cape-town"}>Cape Town</MenuItem>
                    <MenuItem value={"george"}>George</MenuItem>
                    <MenuItem value={"east-london"}>East London</MenuItem>
                    <MenuItem value={"pretoria"}>Pretoria</MenuItem>
                    <MenuItem value={"nelspruit"}>Nelspruit</MenuItem>
                </Select>
            </FormControl>
            <Grid container gap={4} marginTop={"2rem"}>
                <OneDay />
                <SevenDays />
                <Month />
            </Grid>
        </Container>
    );
}

export default ProgressDetails;
