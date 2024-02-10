import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi"
import { useEffect, useState } from "react";
import { Checkbox, Box, List, styled } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/constant";
import email from "../../../model/email";



const Emails = () => {
    const [selectedEmails, setSelectedEmails] = useState([]);

    const [refreshScreen, setRefreshScreen] = useState(false)

    const { openDrawer } = useOutletContext();

    const { type } = useParams();

    const getEmailService = useApi(API_URLS.getEmailFromType);

    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)

    const deleteEmailService = useApi(API_URLS.deleteEmail);

    const selectedAllEmails = (e) => {
        if (e.target.checked) {
            const emails = getEmailService?.response?.map(email => email._id);
            setSelectedEmails(emails);
        }
        else {
            setSelectedEmails([]);
        }
    }
    const deleteSelectedEmails = (e) => {
        if (type === "bin") {
            deleteEmailService.call(selectedEmails);
        }
        else {
            moveEmailsToBinService.call(selectedEmails);
        }
        setRefreshScreen(prevState => !prevState);
    }
    useEffect(() => {
        getEmailService.call({}, type);
    }, [type, refreshScreen]);


    return <Box style={
        openDrawer ? { marginLeft: 250, width: "calc(100% - 250px)" } : { width: "100%" }}>
        <Box style={{ padding: "20px 10px 0 10px", display: "flex", alignItems: "center" }}>
            <Checkbox size="small" onChange={(e) => selectedAllEmails(e)} />
            <DeleteOutline
                onClick={(e) => deleteSelectedEmails(e)} />
        </Box>
        <List key={email._id}>
            {
                // getEmailService && getEmailService.response
                getEmailService?.response?.map(email => (
                    <Email
                        key={email._id}
                        email={email}
                        selectedEmails={selectedEmails}
                        setSelectedEmails={setSelectedEmails}
                        setRefreshScreen={setRefreshScreen} />


                ))

            }
        </List>
        {
            getEmailService?.response?.length === 0 &&
            <NoMails message={EMPTY_TABS[type]} />
        }
    </Box>
}

export default Emails;