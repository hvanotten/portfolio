import design from "../../img/undraw_start_building_re_xani.svg"
import "./services.css";

const Services = () => {
    return(
    <div className="s">
            <div className="s-left">
                <div className="s-card bg"></div>
                <div className="s-card">
                    <img src={design} alt="design monsters with design boards" class="responsive"/>
                </div>
            </div>
            <div className="s-right">
                <div className="s-right-wrapper">
                    <h2 className="s-title">My Services</h2>
                    <p>I dedicate myself to presenting my clients with completed projects that not only meet, but exceed, their initial vision. Knowing what to expect when we work together is critical - here is how I deliver success:</p>
                    <ol className="s-list">
                        <li>Consultation - It all begins with a conversation where we'll pinpoint what this project is all about</li>
                        <li>Proposal - a Detailed project proposal including a visual preview will be presented and a plan of action will be decided.</li>
                        <li>Creation - Clients receive regular updates regarding their project status while I create and test it.</li>
                        <li>Launch & Support - Peace of mind is delivered with the final project in the form of available ongoing support.</li>
                    </ol>
                </div>
            </div>
    </div>

    )
};

export default Services