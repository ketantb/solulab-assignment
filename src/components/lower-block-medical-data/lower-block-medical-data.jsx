import './lower-block-medical-data.css'

const LowerBlockMedicalData = () => {
    return (
        <>
            <div id="LB-container">
                <section id="LB-left-bl">
                    <h3>Files / Documents</h3>
                    <div id="LB-documents">
                        <ul>
                            <li><div className="custom-doc-img"><p></p><p></p><p></p></div><div>Check Up Results.pdf</div></li>
                            <li><div className="custom-doc-img"><p></p><p></p><p></p></div><div>Check Up Results.pdf</div></li>
                            <li><div className="custom-doc-img"><p></p><p></p><p></p></div><div>Medical Prescription.pdf</div></li>
                            <li><div className="custom-doc-img"><p></p><p></p><p></p></div><div>Dental X-Ray Result.pdf</div></li>
                        </ul>
                    </div>
                </section>
                <section id="LB-right-bl">
                    <div id="LB-right-bl-row-1">
                        <div>Root Canal Treatment</div>
                        <div>Show Previous Treatments</div>
                    </div>
                    <div className='LB-right-bl-row-2n3'>
                        <div><h1 className='open-sans-24px-700'>26 Nov ‘19</h1><p className='open-sans-12px-400'>09.00 - 10.00</p></div>
                        <div className='LB-right-custom-border'></div>
                        <div><h2 className='open-sans-12px-400'>Treatment</h2><p className='open-sans-16px-400'>Root Canal</p></div>
                        <div className='LB-right-custom-border'></div>
                        <div><h2 className='open-sans-12px-400'>Dentist</h2><p className="open-sans-14px-400">Drg. Adam H.</p></div>
                        <div><h2 className='open-sans-12px-400'>Nurse</h2><p className="open-sans-14px-400">Jessicamila</p></div>
                        <div className='LB-Rl-notes'><div className="custom-doc-img"><p></p><p></p><p></p></div><h className='open-sans-12px-400'>Note</h></div>
                    </div>
                    <div className='LB-right-bl-row-2n3'>
                        <div><h1 className='open-sans-24px-700'>12 Nov ‘19</h1><p className='open-sans-12px-400'>09.00 - 10.00</p></div>
                        <div className='LB-right-custom-border'></div>
                        <div><h2 className='open-sans-12px-400'>Treatment</h2><p className='open-sans-16px-400'>Root Canal</p></div>
                        <div className='LB-right-custom-border'></div>
                        <div><h2 className='open-sans-12px-400'>Dentist</h2><p className="open-sans-14px-400">Drg. Adam H.</p></div>
                        <div><h2 className='open-sans-12px-400'>Nurse</h2><p className="open-sans-14px-400">Jessicamila</p></div>
                        <div className='LB-Rl-notes'><div className="custom-doc-img"><p></p><p></p><p></p></div><h className='open-sans-12px-400'>Note</h></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LowerBlockMedicalData;