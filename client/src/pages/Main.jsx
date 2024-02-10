
import Header from "../components/Header.jsx"
import Sidebar from "../components/Sidebar.jsx"
import Emails from "../components/Emails.jsx";
import ViewEmail from "../components/ViewEmail.jsx"
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader.jsx";
import {Suspense, useState} from "react";
import { Box } from "@mui/material";

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return <>

            <Header toggleDrawer={toggleDrawer}/>
            <Box>
                <Sidebar openDrawer={openDrawer}/>
                <Suspense fallback={<SuspenseLoader/>}>
                    <Outlet context={{openDrawer}}/>
                </Suspense>
            </Box>
    </>
}
export default Main;