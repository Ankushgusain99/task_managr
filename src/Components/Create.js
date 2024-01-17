import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(
      'https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment',
      {
        name: name, email: email, title: title, date: date, status: "Pending",
        header
      }).then(() => {
        history("/read")
      })
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  return (
    <>
      <h2> Create</h2>
      <div className="Container d-flex justify-content-center">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="title"
              onChange={(e) => {
                setName(e.target.value)
              }} />
            <div id="name" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value)
              }} />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Task Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="title"
              onChange={(e) => {
                setTitle(e.target.value)
              }} />
            <div id="task_title" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" id="due_date" aria-describedby="duedateHelp"
              onChange={(e) => {
                setDate(e.target.value)
              }} />
            <div id="dueDate" className="form-text"></div>
          </div>


          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
      </div>

    </>
  )
}

export default Create
