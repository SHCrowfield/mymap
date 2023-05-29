import "./VerticalTimeLine.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faComputer, faMusic } from "@fortawesome/free-solid-svg-icons";
import timelineElements from "./timelineElement";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimeLine = () => {
    const workIconStyles = { background: "#06D6A0" };
    const schoolIconStyles = { background: "#f9c74f" };
    const hobbyIconStyles = { background: "#f8961e" };
    return (
        <div className="verticaltimeline">
            <h1 className="title">Eddigi Tapasztalatok</h1>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        const isWorkIcon = element.icon === "work";
                        const isSchoolIcon = element.icon === "school";
                        const isHobbyIcon = element.icon === "hobby";
                        let icon = null;
                        let iconStyle = {};

                        if (isWorkIcon) {
                            icon = <FontAwesomeIcon icon={faComputer} />;
                            iconStyle = workIconStyles;
                        } else if (isSchoolIcon) {
                            icon = <FontAwesomeIcon icon={faGraduationCap} />;
                            iconStyle = schoolIconStyles;
                        } else if (isHobbyIcon) {
                            icon = <FontAwesomeIcon icon={faMusic} />;
                            iconStyle = hobbyIconStyles;
                        }

                        return(
                            <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={iconStyle} 
                            icon={icon}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>
                            
                            </VerticalTimelineElement>
                        )
                    }
                )}
            </VerticalTimeline>
        </div>
    )
}

export default VerticalTimeLine