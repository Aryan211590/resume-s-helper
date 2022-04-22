import React from 'react'
import { useState } from 'react';
import { Row } from 'react-bootstrap';

const Note = () => {

    const [project, setproject] = useState({
        projectValue: "",
        texyAreaVAlue: "",
    });
    const OnProject = (e) => {
        setproject(e.target.value);
    }
    console.log(project)
    return (
        <>
            <Row>
                <input type="text" value={project.projectValue} onChange={OnProject} className="project" placeholder='Heading' />
                <textarea id="w3review" value={project.texyAreaVAlue} onChange={OnProject} name="w3review" rows="4" cols="50" placeholder='At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.'>
                    {project.texyAreaVAlue}
                </textarea>
            </Row>
        </>
    )
}

export default Note;