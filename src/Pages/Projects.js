import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, Route, Routes } from 'react-router-dom'
import Project21 from '../Pages/Projects/Project21'
import Project22 from '../Pages/Projects/Project22'
import Project23 from '../Pages/Projects/Project23'
import Project24 from '../Pages/Projects/Project24'

export default function Projects() {

  /* const [project, setProject] = useState();
  const [showCreateForm, setCreateForm] = useState(false)
  const [newRecord, setNewRecord] = useState({ Id: '', Project_Title: '', Name_of_Guide: '', Year: '', Student_Name1: '', Student_Name2: '', Student_Name3: '', Student_Name4: '' })


  useEffect(() => {
    //logic to connect API
    axios
      .get("http://localhost:3001/projects")
      .then((response) => {
        setProject(response.data)
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //logic to connect API --- to post records
  const createRecord = () => {
    axios
      .post("http://localhost:3001/projects", newRecord)
      .then((response) => {
        alert('Project Added Successfully')
        setCreateForm(false)
      })
      .catch((error) => console.log(error));
  } */

  return (

    <>

      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='bg-primary text-white text-center'>Students Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>


        <div className='container mt-4'>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" to="project21"><h3>2021</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="project22"><h3>2022</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="project23"><h3>2023</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="project24" ><h3>2024</h3></Link>
            </li>
          </ul>

          {/* Routing Configuration */}
          <Routes>
            <Route path='/project21' element={<Project21 />} />
            <Route path='/project22' element={<Project22 />} />
            <Route path='/project23' element={<Project23 />} />
            <Route path='/project24' element={<Project24 />} />
          </Routes>
        </div>

      </div>

    </>
  )
}
