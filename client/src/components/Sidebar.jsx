import {styled, Drawer } from "@mui/material"
import SidebarComponent from "./SidebarComponent"
import ComposeMail from "./ComposeMail";

const Sidebar = ({openDrawer}) => {
    return <div>
        <Drawer 
            anchor="left"
            open={openDrawer}
            hideBackdrop={true}
            // backdrop=when the drawer is opened, it dulls the surroundings outside drawer
            ModalProps={{
                keepMounted: true
            }}
            variant="persistent"
            sx={{
                "& .MuiDrawer-paper": {
                    marginTop: "64px",
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: "none",
                    height: "calc(100vh-64px)"
                    // 100vh is the 100% height and 64 pixels is the default height of header
                }
            }}
            // sx is mui paper
            // This react componenet Drawer has mui paper in it which we are manipulting using sx
        >


            <SidebarComponent/>
        </Drawer>
    </div>
}
export default Sidebar;