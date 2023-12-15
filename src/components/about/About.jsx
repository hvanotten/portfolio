
import "./about.scss";
import Me from "../../assets/picofme_1.png"
import FileSaver from 'file-saver';




const About = () => {
    return (
        <div className="a">
            <div className="a-stars">
          <div id='a-stars1'></div>
          <div id='a-stars2'></div>
          <div id='a-stars3'></div>
            </div>
            <aside className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt=" long haired woman with glasses smiling" />
                </div>
            </aside>
            <main className="a-right">

                <h2 className="a-title">About Me</h2>

                <p className="a-desc">Hello, I'm Hillary, and my journey is a fusion of technology, accessibility, and passion. With a decade of experience in the medical field, I embarked on a thrilling career transition six years ago, diving headfirst into the dynamic world of tech. Starting from a humble technical support position, I steadily climbed the ladder to become a proficient software developer.<br></br><br></br>
                    Today, my primary focus revolves around crafting innovative solutions for clients at EvoPunk. I relish the challenge of turning ideas into functional, user-friendly products that make a real impact.<br></br><br></br>
                    Tech has not only become my profession but also my playground. When I'm not coding, you can often find me immersed in the world of video games or enjoying a competitive tabletop game with friends. The thrill of problem-solving in code mirrors my love for strategic gaming.<br></br><br></br>
                </p>
                <p className="a-desc">   Let's Work Together!</p>

                <ul className="a-sub">
                <button className="resume-button" onClick={saveFile}>Download Resume</button>
                </ul>
            </main>


        </div>
    );
};

const saveFile = () => {
    FileSaver.saveAs(
    process.env.PUBLIC_URL + "/HillaryVanOttenResume.pdf",
    "/HillaryVanOttenResume.pdf");
}
export default About;