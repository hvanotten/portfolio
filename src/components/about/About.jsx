import "./about.css";
import me2 from "../../img/of_course.png";


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={me2} alt="animated emoji of Woman with glasses" />
                </div>
            </div>
            <div className="a-right">
                <h2 className="a-title">About Me</h2>

                <p className="a-desc"> My name is Hillary VanOtten, a full-stack software engineer. I love designing and developing small business solutions to be seen on the web. Whether that can be creating a website for you from the ground up, or updating an existing presense for the mobile age. Providing a place for interested parties to find and learn about what you offer is what I offer. How can I help you today?</p>

                <ul className="a-sub">
                <button class="resume-button">Download Resume</button>
                </ul>
            </div>


        </div>
    );
};

export default About;