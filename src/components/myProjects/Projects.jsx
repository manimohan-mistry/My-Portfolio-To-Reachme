import "./Projects.css";
import themePattern from "../../assets/theme_pattern.svg";
import myworkData from "../../assets/mywork_data";
import arrowIcon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Projects</h1>
        <img src={themePattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {myworkData.map((mywork, index) => {
          return <img key={index} src={mywork.w_img} />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="arrow image" />
      </div>
    </div>
  );
};

export default Projects;
