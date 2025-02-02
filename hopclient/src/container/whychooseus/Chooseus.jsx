import "./chooseus.css";
import { FaAngleDown} from "react-icons/fa";
import { useState } from 'react';


function App() {
  const [isActive, SetIsActive] = useState(false);
  const [aactive, iisactive] = useState(false);
  const [act, isact] = useState(false);
  const [ac, isac] = useState(false);
  const [a, isa] = useState(false);
  const [aa, bb] = useState(false);
  return (
    <div className="choose--chooseus">
        <input type="checkbox" id="choose--click" className='choose--check'></input>
        <label className='choose--btn' for ="click" onClick={(e) => SetIsActive(!isActive)}>
            <div className='choose--btn_'>Customizing your Treatement</div>
            <label className='choose--btn_icon space_1' for="click">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {isActive && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>Needs of people differ from one another- No two people are alike. Our skilled and professional team at HMH plans out and prepares tailor made treatment for each patient to help them to come to normalcy at the earliest. raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
          </div>  
        )}
        <br></br><br></br>
        <input type="checkbox" id="choose--clicks" className='choose--check'></input>
        <label className='choose--btn' for ="clicks" onClick={(e) => iisactive(!aactive)}>
            <div className='choose--btn_'>Complete confidence</div>
            <label className='choose--btn_icon space_2' for="clicks">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {aactive && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>Patient feedback reveals the confidence with which the patient comes and leaves the hospital. They have rated us at 9.7 on a 10 point scale in regards to services and medical care at HMH in the first year of commissioning.</div>
          </div>  
        )}
        <br></br><br></br>
        <input type="checkbox" id="choose--clicks3" className='choose--check'></input>
        <label className='choose--btn' for="clicks3" onClick={(e) => isact(!act)}>
            <div className='choose--btn_'>Quality of Services</div>
            <label className='choose--btn_icon space_3' for="clicks3">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {act && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>We adhere to stringent infection control protocols and are committed to provide safe and clean environment to our patients and staff alike. We are striving to achieve a infection free hospital.</div>
          </div>  
        )}
        <br></br><br></br>
        <input type="checkbox" id="choose--clicks4" className='choose--check'></input>
        <label className='choose--btn'for="clicks4" onClick={(e) => isac(!ac)}>
            <div className='choose--btn_'>No Waiting List</div>
            <label className='choose--btn_icon space_4' for="clicks4">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {ac && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>In HMH there are no waiting lists. Your treatment can be started as soon as you are ready.</div>
          </div>  
        )}
        <br></br><br></br>
        <input type="checkbox" id="choose--clicks5" className='choose--check'></input>
        <label className='choose--btn' for='clicks5' onClick={(e) => isa(!a)}>
            <div className='choose--btn_'>In your Own Language</div>
            <label className='choose--btn_icon space_5' for="clicks5">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {a && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>Communication plays an important role in treatment process while caring for people. We ensure that the patient and family are explained about the problem and plan of care in a language understood by them. This enables the patient to accept the treatment. If a patient is of foreign origin, an interpreter is arranged for smooth communication.</div>
          </div>  
        )}
        <br></br><br></br>
        <input type="checkbox" id="choose--clicks6" className='choose--check'></input>
        <label className='choose--btn' for='clicks6' onClick={(e) => bb(!aa)}>
            <div className='choose--btn_'>Available at All Times</div>
            <label className='choose--btn_icon space_6' for="clicks6">
                <FaAngleDown fontSize={18}/>
            </label>
        </label>
        {aa && (
          <div className='choose--dropdown-content'>
            <div className='choose--dropdown-item'>Communication plays an important role in treatment process while caring for people. We ensure that the patient and family are explained about the problem and plan of care in a language understood by them. This enables the patient to accept the treatment. If a patient is of foreign origin, an interpreter is arranged for smooth communication.</div>
          </div>  
        )}
        <br></br><br></br>
    </div>
  )
}



export default App