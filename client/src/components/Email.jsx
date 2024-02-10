import { Margin, Star, StarBorder } from "@mui/icons-material";
import { Box, Typography, Checkbox, Divider, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes"
import { API_URLS } from "../services/api.urls";
import useApi from "../hooks/useApi";


const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    background: "#f2f6fc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& > div": {
        display: "flex",
        width: "100%",
        "& > p": {
            fontSize: 14
        }
    }
});
const Indicator = styled(Typography)({
    fontSize: "12px !important",
    background: "#ddd",
    color: "#zzz",
    padding: "0 4px",
    borderRadius: "4px",
    marginRight: "6px"
})

const Date = styled(Typography)({
    marginLeft: "auto",
    marginRight: 20,
    fontSize: 12,
    color: "#5f6368"
})
// const selectDeselectEmail=(e, args)=> {
//     if (args.selectedEmails.includes(args.email._id)){
//         setSelectedEmails(args.selectedEmails?.splice(args.selectedEmails.indexOf(args.email?._id),1)); 
//     }
//     else {
//         setSelectedEmails(args.selectedEmails.push(args.email._id));
//     }
//     e.target.value!=1;
//     console.log(args.email?._id);
// }
const StyledDivide = styled(Divider)({
    width: "100%",
})


const Email = ({ email, selectedEmails, setSelectedEmails, setRefreshScreen }) => {
    const navigate = useNavigate()

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email._id, value: !email.starred });
        setRefreshScreen(prevState => !prevState);
    }

    const handleChange = () => {
        const emailId = email._id;

        if (selectedEmails.includes(emailId)) {
            setSelectedEmails((prevSelected) =>
                prevSelected.filter((id) => id !== emailId)
            );
        } else {
            setSelectedEmails((prevSelected) => [...prevSelected, emailId]);
        }
    };
    return (
        <div><Wrapper>
            <Checkbox
                fontSize="small"
                checked={selectedEmails.includes(email._id)}
                onChange={handleChange}
            />
            {
                email.starred ?
                    <Star fontSize="small" style={{ marginRight: "10px", color: "#fcd12a" }} onClick={() => toggleStarredMails()} />
                    :
                    <StarBorder fontSize="small" style={{ marginRight: "10px" }} onClick={() => toggleStarredMails()} />
            }
            <Box onClick={() => navigate(routes.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: "hidden" }}>
                    {email.name}
                </Typography>
                <Indicator>Inbox</Indicator>
                <Typography >
                    {email.subject} {email.body && "-"} {email.body}
                </Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString("default", { month: "long" })}
                </Date>
            </Box>

        </Wrapper >
        <StyledDivide/>
        </div>)

}

export default Email;