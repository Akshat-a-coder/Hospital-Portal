
import './value.css' ;
import {logo,accountability,excellence,respect,teamwork,trust,innovation,quality} from '../../assets/image';

const Values = () => {
  return (
    <>
        <div className='value--all'>
            <div className='value--title'><h2>OUR VALUES</h2></div> 
            <div className='value--qoute'> When 'I' is replaced by 'we' , even illness becomes wellness !! </div>
            <div className="value--content">
              <div className="value--circle-img"><img src={logo} alt="medical-equipment"/> </div>
              <div className='value--alltext'>
              <div className='value--C1'> <img className='value--D1' src={respect} alt="respect-tag" />Mutual Respect - We treat others the way we want to be treated. </div>
              <div className='value--C2'> <img className='value--D1' src={innovation} alt="innovation-tag"/> Innovation - Always bringing the new and better treatment for you.</div>
              <div className='value--C3'> <img className='value--D1' src={quality} alt="quality-tag"/> Quality - We comply by the rules, ethics and standards of our respected profession. </div>
              <div className='value--C4'> <img className='value--D1' src={teamwork} alt="teamwork-tag"/> Team Work - We support our knowledgeable and skilled medical staff. </div>
              <div className='value--C5'> <img className='value--D1' src={excellence} alt="excellence-tag"/> Excellence - We are at our best at all times . </div>
              <div className='value--C6'> <img className='value--D1' src={trust} alt="trust-tag"/> Trust - We act with integrity and maintain the essence of honesty, being fair, and reliable.</div>
              <div className='value--C7'> <img className='value--D1' src={accountability} alt="accountability-tag"/> Accountability - We accept responsibility for our actions and mistakes.</div>
              </div> 
            </div>
                             
        </div>
    </>
 
  
    )
} ;

export default Values ;
