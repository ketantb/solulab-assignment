import './main.css'
import NavBar from "../navbar/navbar";
import UpperBlockProfileData from '../upper-block-profile-data/upper-block-profile-data';
import LowerBlockMedicalData from '../lower-block-medical-data/lower-block-medical-data';

const Main = () => {
    return (
        <>
            <div id="main-container">
                <section>
                    <NavBar />
                </section>
                <section>
                    <div>
                        <UpperBlockProfileData />
                    </div>
                    <div>
                        <LowerBlockMedicalData />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Main;