import '..//section.css';
import hlogo from '../../assets/hlogo.jpeg';
import grouppic from "../../assets/doctor-group-removebg-preview.png";
import { Values, Counter, Chooseus, About} from '../../container';
import hos from '../../assets/draw_svg20210507-22909-1vmwztx.svg.png'


function Navbar(){

    return(
        <>
            <section className="parallax">
                <div className="parallax-inner">
                    <div className='sec'>
                        <div><img src={grouppic}></img></div>
                    </div>
                </div>
                <div className='abouthos'>
                    <div className='hosimg'>
                        <img src={hos}></img>
                    </div>
                    <div className='hoscontent'>
                        <h2>About Prateek Hospital</h2>
                        {/* <h4>live peaceful</h4> */}
                        <p>Established in 1999 with the sole aim of providing excellent medical treatment at affordable price Sanjeevani surgical and General Hospital is the brain child of its Founder and Medical Director Dr. Sunil Agrawal. The name "SANJEEVANI" is inspired from the name of Dr. Sunil Agrawal’s mother & also the life saving herb in Ayurveda.</p>
                        <p>Sanjeevani hospital aspires to be a highly effective professional organization devoted to ensuring and striving to improve the health status of our community.</p>
                    </div>
                </div>


                {/* <div className="div1">
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
      </div>
      <div className="div2">
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
      </div>
      <div className="div3">
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        <div className="  img-bx">
          <h2>ICU</h2>
          <div className="circlebox">
            <a href="#home">
              <img alt="ICU" className="thumbnail" src="https://sanjeevanihospitalmalad.com/assets/img/facilities/icu.png" title="ICU" />
            </a>
          </div>
        </div>
        </div> */}
            </section>
            <Values/>
            {/* <About/> */}
            <Counter/>
            <Chooseus/>

        </>
    )
}

export default Navbar;