import "./navbar.css"

import graphIcon from "./images/graphIcon.svg"
import plusIcon from "./images/plusIcon.svg"
import profileIcon from "./images/profileIcon.svg"
import folderIcon from "./images/folderIcon.svg"
import uploadIcon from "./images/uploadIcon.svg"
import reportIcon from "./images/reportIcon.svg"
import settingIcon from "./images/settingsIcon.svg"
import logoutIcon from "./images/logoutIcon.svg"

const NavBar = () => {
    return (
        <nav id="nav-container">
            <div id="div-1">
                <img id="graphIcon" src={graphIcon} alt="Avatar"/>
            </div>
            <div>
                <img id="plusIcon" src={plusIcon} alt="Avatar"/>
                <p>NEW</p>
            </div>
            <div>
                <img id="profileIcon" src={profileIcon} alt="Avatar"/>
                <p>PATIENT</p>
            </div>
            <div>
                <img id="folderIcon" src={folderIcon} alt="Avatar"/>
                <p>FOLDER</p>
            </div>
            <div>
                <img id="uploadIcon" src={uploadIcon} alt="Avatar"/>
                <p>UPLOAD</p>
            </div>
            <div>
                <img id="reportIcon" src={reportIcon} alt="Avatar"/>
                <p>REPORT</p>
            </div>
            <div>
                <img id="settingIcon" src={settingIcon} alt="Avatar"/>
                <p>SETTING</p>
            </div>
            <div>
                <img id="logoutIcon" src={logoutIcon} alt="Avatar"/>
                <p>LOGOUT</p>
            </div>
        </nav>
    )
}

export default NavBar;
