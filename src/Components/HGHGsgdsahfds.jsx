import React from 'react'

const HGHGsgdsahfds = () => {
    return (
        <div>
            <Row >
                <Col md={9} lg={9} sm={9} xs={9} className='section'>
                    <div className="detail" id="detail">
                        <div className="intero">
                            {/* <TextareaAutosize
                                placeholder='Pardeep verma'
                                style={{ color: mystyle }}
                                value={state.Name}
                                id='NameInput'
                            />
                            <TextareaAutosize
                                placeholder='Occupation'
                                value={state.Occupation}
                                id='Occupation'
                            /> */}
                            {/* <div className="uploadimg">
                                {selectedFile && <img src={preview} alt="img panding" />}
                            </div>
                            <TextareaAutosize
                                style={{ fontSize }}
                                value={state.Aboutus}
                                id="Information"
                                placeholder='Hey my name is pareep verma and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
                            />
                            <hr /> */}
                        </div>
                        <div className="jobdetail">
                            {/* <Row>
                                <Col md={4} lg={4} sm={4} xs={4}>
                                    <p id="EXPERIENCE">EXPERIENCE</p>
                                    <input type="text" placeholder='Web Developer' value={state.Job} id='NameJob' />
                                    <textarea id="Location" className=" title template__section__info__value" value={state.Location} placeholder='oblivision technology' name="w3review" style={{ width: 100 }}>
                                        {state.Aboutus}
                                    </textarea>
                                    <p>
                                        <input type="month" placeholder='March-21' value={state.Start} className='start' />
                                        <input type="month" placeholder='june-21' value={state.Last} className='start' />
                                    </p>
                                </Col>
                                <Col md={8} lg={8} sm={8} xs={8}>
                                    <div className="jobtitl">
                                        <input type="text" placeholder='oblivision technology' value={state.Location} id='NameJob' />
                                        <TextareaAutosize
                                            style={{ fontSize }}
                                            value={state.AboutJob}
                                            placeholder='Hey my name is pareep verma and i am a web designer and developer'
                                            id="Information"
                                        />
                                    </div>
                                </Col>
                            </Row> */}
                            <hr />
                        </div>

                        <div className="eduacafsdd">
                            {/* <Row>
                                <Col md={4} lg={4} sm={4} xs={4}>
                                    <p id="EXPERIENCE">EDUCATION</p>
                                    <TextareaAutosize
                                        id="Locationn"
                                        placeholder='DAV collage ,  Abohar'
                                        value={state.Collage}
                                    />
                                    <TextareaAutosize
                                        placeholder='Bsc Agriculture'
                                        value={state.Qualification}
                                        id="Information"
                                    />

                                    <p>
                                        <input type="month" placeholder='March-21' value={state.CollageStart} className='start' />
                                        <input type="month" placeholder='june-21' value={state.CollageLast} className='start' />
                                    </p>
                                </Col>
                                <Col md={8} lg={8} sm={8} xs={8}>
                                    <TextareaAutosize
                                        id='NameJob'
                                        className="border-0"
                                        placeholder='Bsc Agriculture'
                                        value={state.Qualification}
                                    // id="Information"
                                    />
                                    <TextareaAutosize
                                        id="Locationn"
                                        placeholder='Panjab University'
                                        value={state.Board}
                                    />
                                    <div className="educationtitl">

                                        <TextareaAutosize

                                            style={{ fontSize }}
                                            value={state.AboutEDUCATION}
                                            placeholder='01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                                                                        Bachelor of Arts in Communication'
                                            id="Information"
                                        />
                                    </div>
                                </Col>
                            </Row> */}
                            <hr />
                        </div>
                        <div className="schooldsad">
                            <Row>
                                {/* <Col md={4} lg={4} sm={4} xs={4}>
                                    <p id="EXPERIENCE">School</p>
                                    <TextareaAutosize
                                        placeholder='12th'
                                        value={state.SchoolQualification}
                                        id="Information"
                                    />
                                    
                                    <TextareaAutosize
                                        id="Locationn"
                                        placeholder='Maya Devi School'
                                        value={state.School}
                                    />
                                    <p>
                                        <input type="month" placeholder='March-21' value={state.SchoolStart} className='start' />
                                        <input type="month" placeholder='june-21' value={state.SchoolLast} className='start' />
                                    </p>
                                </Col>

                                <Col md={8} lg={8} sm={8} xs={8}>
                                    <TextareaAutosize
                                        id="Locationn"
                                        placeholder='Punjab School Education B oard'
                                        value={state.BoardSchool}
                                    />
                                    <div className="educationtitl">
                                        <TextareaAutosize
                                            className=" title template__section__info__value"
                                            style={{ fontSize }}
                                            value={state.SchoolEDUCATION}
                                            placeholder='01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                                                                        Bachelor of Arts in Communication'
                                            id="Information"
                                        />
                                    </div>

                                </Col> */}
                            </Row>
                        </div>
                        <div className="addeduaction">
                            <Row>
                                {/* <Col md={12}>
                                    <Education Eduac={Eduac} onDelete2={onDelete2} />
                                </Col> */}
                            </Row>
                        </div>

                        <Row>
                            {/* <Todo todos={todos} onDelete={onDelete} /> */}
                        </Row>

                    </div>
                </Col>
                <Col md={3} lg={3} sm={3} xs={3} className='colorsection' id="Theam" style={mystyle}>
                    <div className="forpadding">
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12, borderBottom: "1px solid white" }}>CONTACT INFORMATION</p>
                        <label htmlFor="text" id="lableColor">Date Of Birth</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.date}</p>
                        <label htmlFor="text" id="lableColor">Email</label>
                        <textarea id="Information" className="title" value={state.Email} style={{ background: "transparent", color: 'white', fontWeight: "300", fontSize: 12 }}>
                            {state.Email}
                        </textarea>
                        <label htmlFor="text" id="lableColor">phone</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.phone}</p>
                        <label htmlFor="text" id="lableColor">Address</label>
                        <p className=" title template__section__info__value" style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Address}</p>

                        <label htmlFor="text" id="lableColor">Nationality</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Nationality}</p>
                        <label htmlFor="text" id="lableColor">Language</label>
                        {languas.map((langua, index) => (
                            <Language
                                id="lableColor"
                                key={index}
                                index={index}
                                langua={langua}
                                completelangua={completelangua}
                                removelangua={removelangua}
                            />
                        ))}
                        <br />
                        <label htmlFor="text" className=" title template__section__info__value" id="lableColor">Skill</label>

                        {Skillas.map((Skilla, index) => (
                            <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                            />
                        ))}
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Skill}</p>
                        {/* <p className=" title template__section__info__value" style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Language}</p> */}
                        <label htmlFor="text" id="lableColor">Link</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Link}</p>
                        <br />
                    </div>
                </Col>
            </Row>

            <Row >
                <Col md={3} lg={3} sm={3} xs={3} className='colorsection' id="Theammmmm" style={mystyle}>
                    <div className="forpadding">
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12, borderBottom: "1px solid white" }}>CONTACT INFORMATION</p>
                        <label htmlFor="text" id="lableColor">Date Of Birth</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.date}</p>
                        <label htmlFor="text" id="lableColor">Email</label>
                        <textarea id="Information" className="title" value={state.Email} style={{ background: "transparent", color: 'white', fontWeight: "300", fontSize: 12 }}>
                            {state.Email}
                        </textarea>
                        <label htmlFor="text" id="lableColor">phone</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.phone}</p>
                        <label htmlFor="text" id="lableColor">Address</label>
                        <p className=" title template__section__info__value" style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Address}</p>

                        <label htmlFor="text" id="lableColor">Nationality</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Nationality}</p>
                        <label htmlFor="text" id="lableColor">Language</label>
                        {languas.map((langua, index) => (
                            <Language
                                id="lableColor"
                                key={index}
                                index={index}
                                langua={langua}
                                completelangua={completelangua}
                                removelangua={removelangua}
                            />
                        ))}
                        <br />
                        <label htmlFor="text" className=" title template__section__info__value" id="lableColor">Skill</label>

                        {Skillas.map((Skilla, index) => (
                            <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                            />
                        ))}
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Skill}</p>
                        {/* <p className=" title template__section__info__value" style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Language}</p> */}
                        <label htmlFor="text" id="lableColor">Link</label>
                        <p style={{ color: 'white', fontWeight: "300", fontSize: 12 }}>{state.Link}</p>
                        <br />
                    </div>
                </Col>


                <Col md={9} lg={9} sm={9} xs={9} className='section'>
                    <div className="detail">

                        <input type="text" placeholder='Pardeep verma'
                            style={{ color: mystyle }}
                            value={state.Name}
                            id='NameInput'
                            id='NameInput' />

                        <input type="text"
                            placeholder='Occupation'
                            value={state.Occupation}
                            id='Occupation'
                            id='Occupation' />


                        <div className="uploadimg">
                            {selectedFile && <img src={preview} alt="img panding" />}
                        </div>
                        <hr />
                        <textarea style={{ fontSize }}
                            value={state.Aboutus}
                            id="Information"
                            placeholder='Hey my name is pareep verma and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'>
                            {state.Aboutus}
                        </textarea>
                        <hr />

                        {/* <Row>
                            <Col md={4} lg={4} sm={4} xs={4}>
                                <p id="EXPERIENCE">EXPERIENCE</p>
                                <input type="text" placeholder='Web Developer' value={state.Job} id='NameJob' />
                                <textarea id="Location" className=" title template__section__info__value" value={state.Location} placeholder='oblivision technology' name="w3review" style={{ width: 100 }}>
                                    {state.Aboutus}
                                </textarea>
                                <p>
                                    <input type="month" placeholder='March-21' value={state.Start} className='start' />
                                    <input type="month" placeholder='june-21' value={state.Last} className='start' />
                                </p>
                            </Col>
                            <Col md={8} lg={8} sm={8} xs={8}>
                                <div className="jobtitl">
                                    <input type="text" placeholder='oblivision technology' value={state.Location} id='NameJob' />
                                    <TextareaAutosize
                                        style={{ fontSize }}
                                        value={state.AboutJob}
                                        placeholder='Hey my name is pareep verma and i am a web designer and developer'
                                        id="Information"
                                    />
                                </div>
                            </Col>
                            <hr />
                            <Col md={4} lg={4} sm={4} xs={4}>
                                <p id="EXPERIENCE">EDUCATION</p>
                                <textarea id="Location" value={state.Collage} placeholder='DAV collage ,  Abohar' name="w3review" style={{ width: 100 }}>
                                    {state.Collage}
                                </textarea>
                                <p>
                                    <input type="text" placeholder='March-21' value={state.CollageStart} id='start' />
                                    <input type="text" placeholder='june-21' value={state.CollageLast} id='last' />
                                </p>
                            </Col>
                            <Col md={8} lg={8} sm={8} xs={8}>
                                <div className="educationtitl">
                                    <input type="text" placeholder='Bsc Agriculture' value={state.Qualification} id='NameJob' />
                                    <textarea id="Information" style={{ fontSize }} className="title" value={state.AboutEDUCATION} placeholder='Hey my name is john and i am a web designer and developer' name="w3review" rows="3" cols="30">
                                        {state.AboutEDUCATION}
                                    </textarea>
                                </div>
                            </Col>
                            <Col md={4} lg={4} sm={4} xs={4}>
                                <p id="EXPERIENCE">EDUCATION</p>
                                <TextareaAutosize
                                    id="Locationn"
                                    placeholder='DAV collage ,  Abohar'
                                    value={state.Collage}
                                />
                                <TextareaAutosize
                                    placeholder='Bsc Agriculture'
                                    value={state.Qualification}
                                    id="Information"
                                />

                                <p>
                                    <input type="month" placeholder='March-21' value={state.CollageStart} className='start' />
                                    <input type="month" placeholder='june-21' value={state.CollageLast} className='start' />
                                </p>
                            </Col>
                            <Col md={8} lg={8} sm={8} xs={8}>
                                <TextareaAutosize
                                    id='NameJob'
                                    className="border-0"
                                    placeholder='Bsc Agriculture'
                                    value={state.Qualification}
                              
                                />
                                <TextareaAutosize
                                    id="Locationn" 
                                    placeholder='Panjab University'
                                    value={state.Board}
                                />

                            </Col>
                            <div className="educationtitl">
                                <TextareaAutosize

                                    style={{ fontSize }}
                                    value={state.AboutEDUCATION}
                                    placeholder='01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                                Bachelor of Arts in Communication'
                                    id="Information"
                                />
                            </div>
                        </Row> */}
                        <Row>
                            <Todo todos={todos} onDelete={onDelete} />
                        </Row>
                        {/* <Col md={4} lg={4} sm={4} xs={4}>
                            <p id="EXPERIENCE">School</p>
                            <TextareaAutosize
                                placeholder='12th'
                                value={state.SchoolQualification}
                                id="Information"
                            />

                            <TextareaAutosize
                                id="Locationn"
                                placeholder='Maya Devi School'
                                value={state.School}
                            />
                            <p>
                                <input type="month" placeholder='March-21' value={state.SchoolStart} className='start' />
                                <input type="month" placeholder='june-21' value={state.SchoolLast} className='start' />
                            </p>
                        </Col> */}

                        {/* <Col md={8} lg={8} sm={8} xs={8}> */}
                            {/* <TextareaAutosize
                                id="Locationn"
                                placeholder='Punjab School Education B oard'
                                value={state.BoardSchool}
                            />
                            <div className="educationtitl">
                                <TextareaAutosize
                                    className=" title template__section__info__value"
                                    style={{ fontSize }}
                                    value={state.SchoolEDUCATION}
                                    placeholder='01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                                                                        Bachelor of Arts in Communication'
                                    id="Information"
                                />
                            </div>
                        </Col> */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HGHGsgdsahfds