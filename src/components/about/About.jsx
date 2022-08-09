import "./about.css";
import Team from "../../img/team.jpg"





const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Team}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h3 className="a-sub-title">About Us</h3>
        <h2 className="a-title">Our Teammate</h2>
        <p className="a-sub">
        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business.

        We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business
        </p>
        <div id="hero_btn_container">
                        <a href="#" class="hero_btn">About Us</a>
                        <a href="#" class="hero_btn2">Our Story</a>
                    </div>
    </div>
    
       </div>
    
  );
};

export default About;