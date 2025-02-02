import './guide.css';

function Guide(){
    return(
        <>
        <div className='guide--mainhead'>
            <div>
                <h5>Appointments</h5>
                <p>Take an appointment and be on time for the same and inform the hospital staff if you cannot keep your appointment.
                Appointments are available on the phone. Please call 022-28445678 or 9892056253.</p>
            </div>

            <div>
                <h5>Admission Process</h5>
                <ul>
                    <li>The bed charge is calculated from 10. am to 10 am irrespective of the time of Admission</li>
                    <li>When you move up to a higher class the billing from the day one will be as per the higher class</li>
                    <li>All deposit receipts are provisional & should be surrender at the time of discharge</li>
                    <li>For the convenience of the patient & for priority in admission a hospital bed can be reserved for all planned admissions</li>
                    <li>Admission clerk will prepare the indoor case papers & each patient will get a unique in patient member which would be a reference for all further transactions in the hospital</li>
                    <li>If patient is having any cashless card then relatives have to submit the required documents to billing department within 24 hrs of admission</li>
                </ul>
            </div>

            <div>
                <h5>Discharge Process</h5>
                <ul>
                    <li>Discharge procedure starts only after approval of the treating doctor & preparation of discharge card</li>
                    <li>Any excess medicines refunds should be done one day prior to discharge so as to save time. The nurse on the floor will help you in the process</li>
                    <li>The nurse would prepare the discharge papers & send the file to billing department for final billing</li>
                    <li>After setting the final bill amount the discharge counter clerk will give a discharge intimation to the floor nurse</li>
                    <li>For cashless patient once doctor approves the discharge final bill & discharge summary will be fax to respective TPA. TPA will generally reply within 2-3 hrs till patient has to be there in the hospital</li>
                    <li>Patient who desire immediately discharge has to pay the difference amount in cash & it will be patients responsibility to reimburse from insurance company hospital will not do any procedure further</li>
                </ul>
            </div>

            <div>
                <h5>Report Collection / Delivery</h5>
                <ul>
                    <li>You can collect you reports from pathology department</li>
                    <li>Your reports can also be couriered to you at your residential address if you so desire</li>
                </ul>
            </div>

            <div>
                <h5>Accident And Emergency</h5>
                <p>Our emergency department works around the clock. In case of any emergency, please contact the casualty medical officer at 9892056253.</p>
            </div>

            <div>
                <h5>Ambulance Services</h5>
                <p>We have fully equipped ambulances available for transporting patients to and from the hospital. For availing this service, please call 9892056253.</p>
            </div>

        </div>
        </>
    )
}

export default Guide;