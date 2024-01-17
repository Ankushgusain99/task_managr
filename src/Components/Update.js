import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Update = () => {

  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const getDataById = axios.get(`https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment/${params?.id}`).then((res) => console.log(res?.data));
  console.log(getDataById);
  useEffect(() => {
    axios.get(`https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment/${params?.id}`)
      .then((res) => {
        const { data } = res;
        setId(data?.id);
        setName(data?.name);
        setEmail(data?.email);
        setTitle(data?.title);
        setDate(data?.date);
        setStatus(data?.status);
      });
    // setId(localStorage.getItem("id"))
    // setName(localStorage.getItem("name"))
    // setEmail(localStorage.getItem("email"))
    // setTitle(localStorage.getItem("title"))
    // setDate(localStorage.getItem("date"))
    // setStatus(localStorage.getItem("status"))

  }, [])


  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment/${id}`, {
      name: name,
      email: email,
      title: title,
      date: date,
      status: status
    }).then(() => {
      navigate("/read")
    })

  }

  return (
    <>
      <h2> Update</h2>
      <div className="Container d-flex justify-content-center">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} id="name" aria-describedby="title"
              onChange={(e) => {
                setName(e.target.value)
              }} />
            <div id="name" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value)
              }} />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Task Title</label>
            <input type="text" className="form-control" value={title} id="title" aria-describedby="title"
              onChange={(e) => {
                setTitle(e.target.value)
              }} />
            <div id="task_title" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" value={date} id="due_date" aria-describedby="duedateHelp"
              onChange={(e) => {
                setDate(e.target.value)
              }} />
            <div id="dueDate" className="form-text"></div>
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select 
             className="form-select form-select-lg mb-3" 
             aria-label=".form-select-lg example"
             onChange={(e) => setStatus(e?.target?.value)}
             >
              <option value="Pending" selected={status === "Pending"}>Pending</option>
              <option value="Complete" selected={status === "Complete"}>Complete</option>
            </select>
          </div>


          <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Update</button>
        </form>
      </div>
    </>
  )
}

export default Update
