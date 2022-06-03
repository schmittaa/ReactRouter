import React, { useState } from 'react'
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";


function AddMovie({addMovie}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [rate, setRate] = useState("")

    return (
        <div >
            <Form>
                <Form.Group >
                    <Form.Control type="text" required="true" placeholder="Movie title" onChange={(e)=>setTitle(e.target.value)}/>
                    <InputGroup>
                        <FormControl as="textarea" required="true" aria-label="With textarea" onChange={(e)=>setDescription(e.target.value)} placeholder="What the movie is about ?" />
                    </InputGroup>
                </Form.Group>

                <Form.Group >
                    <select className="selectAdd" required="true" onChange={(e)=>setRate(e.target.value)}>
                        <option>Rate of the movie</option>
                        <option value="1">★☆☆☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="4">★★★★☆</option>
                        <option value="5">★★★★★</option>
                    </select>
                    <input className="selectAdd" required="true" type="text" placeholder="PosterURL" onChange={(e)=>setPosterUrl(e.target.value)} />
                    <Button variant="outline-success" type="button" className="btnAdd" onClick={()=>addMovie({title,description,posterUrl,rate,id:Math.random()})}>
                        Add
                    </Button>
                </Form.Group>




            </Form>
        </div>
    )
}

export default AddMovie