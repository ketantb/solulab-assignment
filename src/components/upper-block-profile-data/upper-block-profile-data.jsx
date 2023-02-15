import './upper-block-profile-data.css'
import profilePic from "./images/profilePic.jpg"

const UpperBlockProfileData = () => {
    return (
        <>
            <div id="UB-container">
                <section id="UB-left-bl">
                    <div>
                        <img id="profileImg" src={profilePic} alt="Avatar" />
                    </div>
                    <div id="userName">Diane Cooper</div>
                    <div id="userEmail">diane.cooper@example.com</div>
                    <div id="appointments">
                        <div><li>15</li><p>Past</p></div>
                        <h2 id="appiontments-divider-bl"> </h2>
                        <div><li>02</li><p>Upcoming</p></div>
                    </div>
                    <button id="send-msg-btn">Send Message</button>
                </section>
                <section id="UB-right-bl">
                    <div id="card-container">
                        <ul className='cards'>
                            <li>Gender</li>
                            <li>Female</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Birthday</li>
                            <li>Feb 24th, 1997</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Phone Number</li>
                            <li>(239) 555 -0108</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Registered Date</li>
                            <li>Feb 24th, 1997</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Street Address</li>
                            <li>JL. Diponegoro No. 21</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>City</li>
                            <li>Cilacap</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Zip Code</li>
                            <li>655849</li>
                            <li></li>
                        </ul>
                        <ul className='cards'>
                            <li>Member Status</li>
                            <li>Active Member</li>
                            <li></li>
                        </ul>
                    </div>
                    <div id="appointment-btns">
                        <div>Upcoming Appointments</div>
                        <div>Past Appointments</div>
                        <div>Medical Records</div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default UpperBlockProfileData;