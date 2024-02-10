import {Box, Typography} from "@mui/material"
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return <div>
        <Box style={{ marginLeft: 250 }}>
            <Typography>
                There was an error loading this page
            </Typography>
        </Box>
    </div>
}
export default ErrorComponent;