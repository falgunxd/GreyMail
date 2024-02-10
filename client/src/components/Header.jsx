import {AppBar, Toolbar, styled, InputBase, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Tune from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import {MenuIcon, Search, Tune, HelpOutlineOutlinedIcon} from "@mui/icons-material";
import { gmailLogo } from "../constants/constant";

const SearchWrapper=styled(Box)({
    background: '#EAF1FB',
    marginLeft: 130,
    borderRadius: 25,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    // justifyContent: "center"
    alignItems: "center",
    justifyContent: "space-between",
    // padding: '0 20px', 
    // for above padding, 0 means vertical padding, 20px means horizontal padding
    "& > div": {
        width: "100%"
    },
    "& > svg ": {
        marginLeft: 15,
        marginRight: 15
    } 
    // this was just meant for testing the svg class style manipulation
})
const OptionsWrapper = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "end",
    "& > svg": {
        padding: "0 10px"
    }

})
// stying an element with position=fixed will make it stick to that place even if it is rendered 
// before or after another component. It will straigt away stay on the top of any elemenet that comes on its way
const Header = ({toggleDrawer}) => {
    return <div >
        <AppBar position="static" style={{
            background: '#F5F5F5',
            boxShadow: 'none',
            margin: 0 
        }}>
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} cursor="pointer"/>
                <img type="image/png" src={gmailLogo} style={{ width: 60, marginLeft: 15, }}/>

                <SearchWrapper>

                    <Search color="action"/>
                    <InputBase placeholder="Search Mail" name="searchMail"/>
                    <Tune color="action"/>

                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlinedIcon color="action" cursor="pointer"/>
                    <SettingsOutlinedIcon color="action"  cursor="pointer"/>
                    <AppsRoundedIcon color="action"  cursor="pointer"/>
                    <AccountCircleOutlinedIcon color="action"  cursor="pointer"/>
                </OptionsWrapper>

            </Toolbar>
        </AppBar>

    </div>
}
export default Header;