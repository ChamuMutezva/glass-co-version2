import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function TougheningOptions() {
    return (
        <FormControl>
            <FormLabel id="status-label">Toughening</FormLabel>
            <RadioGroup
                aria-labelledby="status-label"
                defaultValue="1day"
                name="radio-buttons-group"
                sx={{ display: "flex", flexDirection: "row" }}
            >
                <FormControlLabel
                    value="1day"
                    control={<Radio />}
                    label="1 Day"
                />
                <FormControlLabel
                    value="7days"
                    control={<Radio />}
                    label="7days"
                />
                <FormControlLabel
                    value="30days"
                    control={<Radio />}
                    label="30 Days"
                />
            </RadioGroup>
        </FormControl>
    );
}

export default TougheningOptions;
