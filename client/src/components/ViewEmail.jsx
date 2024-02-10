import { useOutletContext, useLocation } from "react-router-dom";
import { Box, Typography, styled } from "@mui/material";
import { ArrowBack, Delete, AccountCircle } from "@mui/icons-material";
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi"


const IconWrapper = styled(Box)({
    padding: 15,

})
const Subject = styled(Typography)({
    fontSize: "22px",
    margin: "10px 0 20px 75px",
    display: "flex"
})
const Indicator = styled(Box)({
    fontSize: 12,
    backgroundColor: "#ddd",
    color: "#222",
    padding: "2px 4px",
    marginLeft: 6,
    borderRadius: 4,
    alignSelf: "center"
})

const Container = styled(Box)({
    marginLeft: 15,
    // width: "100%",
    display: "flex",
})

const Wrapper = styled(Box) ({
    display: "flex",
    // width: "100%",
    "& > p > span" : {
        fontSize: 12,
        color: "#5e5e5e",
    }
})
const Date = styled(Box) ({
    margin: "0 50px 0 auto",
    fontSize: 12,
    color: "#5e5e5e",

})


const ViewEmail = () => {
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)
    const { openDrawer } = useOutletContext();
    const { state } = useLocation();
    const { email } = state;
    const deleteEmail=(e)=> {
        if (email.bin === "true" ) {
            
        }
        else {
            moveEmailsToBinService.call([email._id]);
        }   
        window.history.back();
    }
    
    return (
        <Box style={
            openDrawer ? { marginLeft: 250,  } : { width: "100%" }}>
            <IconWrapper>
                <ArrowBack
                    onClick={() => window.history.back()}
                    color="black"
                    fontSize="small"
                />
                <Delete
                    color="black"
                    fontSize="small"
                    style={{
                        marginLeft: 40
                    }}
                    onClick={(e)=>deleteEmail(e)}
                />
            </IconWrapper>
            <Subject>
                {email.subject} <Indicator component="span">Inbox</Indicator>
            </Subject>
            <Container>
                <AccountCircle fontSize="large"
                    style={{
                        color: "blue",
                        background: "white", // Set the background color
                        color: "gray",   // Set the color (text/icon color)
                        borderRadius: '50%',         
                        margin: "5px 10px 0 10px"           
                    }} />
                <Box style={{ width: "100%"}}>
                    <Wrapper style={{margin: "10px"}}>
                        <Typography>
                            {email.name}
                            <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
                        </Typography>
                        <Date>

                            {(new window.Date(email.date)).getDate()} &nbsp;
                            {(new window.Date(email.date)).toLocaleString("default", { month: "long" })} &nbsp;
                            {(new window.Date(email.date)).getFullYear()} &nbsp;

                        </Date>
                    </Wrapper>
                    <Typography style={{marginTop: 20}}>{email.body}</Typography>
                </Box>

            </Container>
        </Box>)
}

export default ViewEmail;