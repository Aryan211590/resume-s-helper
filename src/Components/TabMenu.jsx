import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
const TabMenu = () => {
    const [fontSize, updateFontSize] = useState("17px");

    function handleClick() {
        updateFontSize(fontSize => `${parseInt(fontSize) + 5}px`);
    }
    function handleClick2() {
        updateFontSize(fontSize => `${parseInt(fontSize) - 5}px`);
    }
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    return (
        <div>
            <Button onClick={handleClick} id="PrintButton">T</Button>
            <Button onClick={handleClick2} id="PrintButton">T</Button>
            <div className="container">
                <ul className="tab-list">
                    <li className={toggleState === 1 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(1)}>Tab 1</li>
                    <li className={toggleState === 2 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(2)}>Tab 2</li>
                    <li className={toggleState === 3 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(3)}>Tab 3</li>
                </ul>
                <div className="content-container">
                    <div className={toggleState === 1 ? 'content active-content' : "content"}><h2 style={{ fontSize }}>Lorem</h2></div>
                    <div className={toggleState === 2 ? 'content active-content' : "content"}><h2>Ipsum</h2></div>
                    <div className={toggleState === 3 ? 'content active-content' : "content"}><h2>Dolor</h2></div>
                </div>
            </div>
        </div>
    )
}

export default TabMenu