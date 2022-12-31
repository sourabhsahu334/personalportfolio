import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot (5).png";
import projImg2 from "../assets/img/bf59b7b0-e1c6-41c0-81ee-da032419bfa0.jfif";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url:""
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url:"http://priyanshu.host20.uk/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url:"/third"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      url:"/fourth"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      url:"/five"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      url:"/six"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
<p>Working with a developer will allow you to bring your vision to life in a more efficient and effective way. They have the skills and expertise to turn your ideas into a fully-functional product or service</p>                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, url) => {
                            return (
                              <ProjectCard
                                key={url}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Working with a developer will allow you to bring your vision to life in a more efficient and effective way. They have the skills and expertise to turn your ideas into a fully-functional product or service</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Collaborating with a developer will help you save time and resources in the long run. They can handle the technical aspects of your project, freeing you up to focus on other areas of your business</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
