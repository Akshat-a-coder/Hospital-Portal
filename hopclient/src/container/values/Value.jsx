
import './value.css' ;
import {logo,accountability,excellence,respect,teamwork,trust,innovation,quality} from '../../assets/image';

const Values = () => {
  return (
    <>
        <div className='all'>
            <div className='title'><h2>OUR VALUES</h2></div> 
            <div className='qoute'> When 'I' is replaced by 'we' , even illness becomes wellness !! </div>
            <div className="content">
              <div className="circle-img"><img src={logo} alt="medical-equipment"/> </div>
              <div className='alltext'>
              <div className='C1'> <img className='D1' src={respect} alt="respect-tag" />Mutual Respect - We treat others the way we want to be treated. </div>
              <div className='C2'> <img className='D1' src={innovation} alt="innovation-tag"/> Innovation - Always bringing the new and better treatment for you.</div>
              <div className='C3'> <img className='D1' src={quality} alt="quality-tag"/> Quality - We comply by the rules, ethics and standards of our respected profession. </div>
              <div className='C4'> <img className='D1' src={teamwork} alt="teamwork-tag"/> Team Work - We support our knowledgeable and skilled medical staff. </div>
              <div className='C5'> <img className='D1' src={excellence} alt="excellence-tag"/> Excellence - We are at our best at all times . </div>
              <div className='C6'> <img className='D1' src={trust} alt="trust-tag"/> Trust - We act with integrity and maintain the essence of honesty, being fair, and reliable.</div>
              <div className='C7'> <img className='D1' src={accountability} alt="accountability-tag"/> Accountability - We accept responsibility for our actions and mistakes.</div>
              </div> 
            </div>
                             
        </div>
    </>
 
  
    )
} ;

export default Values ;
