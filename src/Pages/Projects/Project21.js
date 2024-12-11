import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, Route, Routes } from 'react-router-dom'

export default function Project21() {
    const [project, setProject] = useState();
    const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState({ Project_Title: '', Name_of_Guide: '', Year: '', Student_Name1: '', Student_Name2: '', Student_Name3: '', Student_Name4: '' })

    useEffect(() => {
        //logic to connect API
        axios
            .get("http://localhost:3001/projects")
            .then((response) => {
                let proData = response.data
                proData = proData.filter(p => p.Year == 2021)
                console.log(proData);
                setProject(proData)
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
    }

    return (
        <>

            <div className='container mt-4'>

                <div className="row">
                    <div className="col-md-12">
                        <button onClick={() => setCreateForm(true)} className="btn btn-primary">Add Post</button>
                    </div>
                </div>
                <br />
                
                <div className='container mt-4'>
                    {/* Form */}
                    <div className="row mt-4">
                        <div className="col-md-12">
                            {
                                showCreateForm ?
                                    <>
                                        <div className="container row border">
                                            <label>Project_Title</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Project_Title: event.target.value })} />
                                            <label>Name_of_Guide</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Name_of_Guide: event.target.value })} />
                                            <label>Year</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Year: event.target.value })} />
                                            <label>Student_Name1</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Student_Name1: event.target.value })} />
                                            <label>Student_Name2</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Student_Name2: event.target.value })} />
                                            <label>Student_Name3</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Student_Name3: event.target.value })} />
                                            <label>Student_Name4</label>
                                            <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, Student_Name4: event.target.value })} />

                                            <button onClick={createRecord} className="btn btn-primary mt-4">Create</button>

                                        </div>
                                    </> : null
                            }
                        </div>
                    </div>
                </div>


            </div>

            <br />
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="bg-primary text-white text-center">Project List</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered text-center">
                            <thead>
                                <tr key="">
                                    <th>Id</th>
                                    <th>Project_Title</th>
                                    <th>Name_of_Guide</th>
                                    <th>Year</th>
                                    <th>Student_Name</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    project ? project.map((p, index) => (
                                        <tr key="">
                                            <td>{p.Id}</td>
                                            <td>{p.Project_Title}</td>
                                            <td>{p.Name_of_Guide}</td>
                                            <td>{p.Year}</td>
                                            <td>
                                                <tr>{p.Student_Name1},{p.Student_Name2},{p.Student_Name3},{p.Student_Name4}</tr>
                                            </td>

                                        </tr>
                                    )) : <tr key=""><td>Loading.....</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>


        </>
    )
}
