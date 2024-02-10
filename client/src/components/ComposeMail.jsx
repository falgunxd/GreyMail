import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Close, DeleteOutline } from "@mui/icons-material";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
const DialogStyle = {
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"
}
const Header = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc",
    "& > p": {
        fontSize: 14,
        fontWeight: 500,
    }
})
const RecipientWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    "& > div": {
        fontSize: 14,
        borderBottom: "1px solid #f5f5f5",
        marginTop: 10
    }
})
const Footer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
})
const SendButton = styled(Button)({
    background: "#0B57D0",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "18px",
    width: "70px"
})

const ComposeMail = ({ openDialogue, setOpenDialogue }) => {
    const sentEmailService = useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);


    const [data, setData] = useState({});

    const onValueChange=(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const config = {
        Host: "smtp.elasticemail.com",
        Username: "falgun.makes.projects@yopmail.com",
        Password: "6FA7771CB0F027442840CADE53804A7E6C2F",
        // Username: import.meta.env.VITE_REACT_APP_USERNAME,
        // Password: import.meta.env.VITE_REACT_APP_PASSWORD,
        Port: 2525,
    }
    const closeComposeMail = (e) => {
        e.preventDefault();
        const payload = {
            to: data.to,
            from: "falgunsoni.2016@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: "",
            name: "Falgun",
            starred: false,
            type: "drafts"
        }
        saveDraftService.call(payload);


        if (!saveDraftService.error) {
            setOpenDialogue(false);
            setData({});
        }
        else {
            
        }


        setOpenDialogue(false);

    }
    const sendMail = (e) => {
        e.preventDefault();
        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "falgunsoni.2016@gmail.com",
                Subject: data.subject,
                Body: data.body,
            })
                .then(message =>  alert(message))
                .then(()=>alert([data.to, data.subject, data.body]))
                .catch(error => console.log(error));
        }

        const payload = {
            to: data.to,
            from: "falgunsoni.2016@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: "",
            name: "Falgun",
            starred: false,
            type: "sent"
        }
        sentEmailService.call(payload);


        if (!sentEmailService.error) {
            setOpenDialogue(false);
            setData({});
        }
        else {
            
        }


        setOpenDialogue(false);
    }


    return <div>
        <Dialog
            open={openDialogue}
            PaperProps={{
                sx: DialogStyle
            }}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>

            <RecipientWrapper>
                <InputBase placeholder="Recipient" name="to" onChange={(e)=>onValueChange(e)}/>
                <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)}/>
            </RecipientWrapper>
            <TextField
                name="body"
                multiline
                rows={20}
                sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    }
                }}
                onChange={(e)=>onValueChange(e)}
                />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>
                    Send
                </SendButton>
                <DeleteOutline onClick={() => setOpenDialogue(false)} />
            </Footer>
        </Dialog>
    </div>
}

export default ComposeMail;