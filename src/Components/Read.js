import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Read = () => { 
  const [status,setStatus]=useState("All")

  const [data, setData] = useState([])

  function getData(val) {

    axios.get('https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment')
      .then((res) => {
        if(val==="All")
          setData(res.data)
        else{
          const filteredData = res.data.filter(item => item.status === val);
          setData(filteredData)
        }
      })
  }
  function setStatuss(val){
    
    getData(val)
    
  }
  function handleDelete(id) {
    
    axios.delete(
      `https://659aaeac652b843dea53dcf3.mockapi.io/crud-assignment/${id}`
    ).then(() => {
      getData()
    })
  }


  useEffect(() => {
    getData("All")
  },[])

  return (
    <>
      <h2>Read</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Title</th>
            <th scope="col">Due Date</th>
            <th scope="col">Status</th>
            <label className="form-label">Select Status</label> 
            <select 
             className="form-select form-select-md mb-3" 
             aria-label=".form-select-lg example"
             onChange={(e) => setStatuss(e?.target?.value)}
             >
              <option value="All" selected={status === "All"}>All</option>
              <option value="Pending" selected={status === "Pending"}>Pending</option>
              <option value="Complete" selected={status === "Complete"}>Complete</option>
            </select>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <React.Fragment key={eachData?.id}>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>{eachData.title}</td>
                    <td>{eachData.date}</td>
                    <td>{eachData.status}</td>
                    <td>
                      <Link to={`/edit/${eachData?.id}`}>
                        <button className='btn-success' 
                        // onClick={()=>{
                        //   setToLocalStorage(
                        //   eachData.id, eachData.name, eachData.email, 
                        //   eachData.title, eachData.date, eachData.status)
                        // }
                          >Edit{" "}</button>
                      </Link>
                    </td>
                    <td>
                      <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          })
        }

      </table>

    </>
  )
}

export default Read
