import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';


const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
            <h3>Add New section</h3>
            <form onSubmit={submit}>
                <div className="">
                    <label htmlFor="title" className="form-label">Title Here</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <TextareaAutosize
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        id="desc"
                    />

                </div>
                <div className="cus-main-todo">
                    <Button type="submit" variant=' my-4' >Add</Button>
                </div>

            </form>

        </>
    )
}

export default AddTodo;