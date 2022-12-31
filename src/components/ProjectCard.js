import { Col } from "react-bootstrap";
import {Link} from 'react-router-dom'

export const ProjectCard = ({ title, description, imgUrl ,url}) => {
  return (
    
    <Col size={12} sm={6} md={4}>
      <div   className="proj-imgbx" >
      <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
        <img src={imgUrl} alt="Coding Beauty logo"></img>
      </a>
        <div className="proj-txtx">
         <a href={url}> <h4 >{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    
  )
}
