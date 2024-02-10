import {useState } from "react";
import { Box , Button, styled , List, ListItem }from "@mui/material"
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { useParams , NavLink} from "react-router-dom";

import { routes } from "../routes/routes";

const ComposedButton = styled(Button)({
    background: "#c2e7ff",
    color: "#001d35",
    padding: 15,
    borderRadius: 16,
    minWidth: "140px",
    textTransform: "none"
})
const Container = styled(Box) ({
    padding: 8,
    "& > ul": {
        padding: "10px 0 0 5px ",
        // padding format top right bottom left
        fontSize: 14,
        fontWeight: 500,
        cursor: "pointer",
        "& > a": {
            textDecoration: "none  ",
            color: "inherit"
        }
    }

})
const SidebarComponent = () => {
    const [openDialogue, setOpenDialogue] = useState(false);

    const {type} = useParams();

    const onComposeClick=()=> {
        setOpenDialogue(true);
    }
    return <div>
        <Container>
            <ComposedButton onClick={()=>onComposeClick()}>
                <CreateOutlinedIcon style={{
                    marginRight: 16,
                    // paddingRight: 8
                    
                    }}/>
                Compose
            </ComposedButton>
            <List>
                {SIDEBAR_DATA.map(data => (
                    <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                        <ListItem  style={type===data.name.toLowerCase()? {
                            backgroundColor: "#d3e3fd",
                            borderRadius: "0 16px 16px 0"
                        }: {}}>
                            <data.icon fontSize="small" style={{marginRight: 15}}/>
                            {data.title}
                        </ListItem>
                        </NavLink>
                ))}
            </List>
            <ComposeMail openDialogue={openDialogue} setOpenDialogue={setOpenDialogue}/>
        </Container>
    </div>
}
export default SidebarComponent;