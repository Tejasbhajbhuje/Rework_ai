import "./hero.css";
import book from "../assets/logos/book.png";
import group from "../assets/logos/Group.png";
import rectangle from "../assets/logos/rectangle.png";

export const Hero = () => {
  return (
    <div class='container main'>
      <div class="row container">
        <div class="col-lg-4">
          <div class="container power">
            <h1 className="heading">Power Up Your Hiring</h1>
            <span className="span">with Rework.</span>
            <p className="text-wrap">
              Empower your business with cutting-edge A.I. technology,
              simplified processes, and top-tier talent connections. Rework is
              your strategic partner in redefining how you hire
            </p>
            <button className="cta-btn">
              <img src={book} alt="book" />
            </button>
            <br />
            <div className="points">
              <div className="frame">
                <img className="group" alt="Group" src={group} />
                <div className="text-wrapper">No credit Required</div>
              </div>
              <div className="frame">
                <img className="group" alt="Group" src={group} />
                <div className="text-wrapper">
                  Streamlined Recruitment Process
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <img className="rectangle" src={rectangle} alt="rectangle" />
        </div>
        <div />
      </div>
    </div>
  );
};
