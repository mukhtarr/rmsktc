import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Posts() {

    const [posts, setPosts] = useState();
    const [showCreateForm, setCreateForm] = useState(false)
    const [newRecord, setNewRecord] = useState({ Project_Title: '', Name_of_Guide: '', Year: '', Student_Name1: '', Student_Name2: '', Student_Name3: '', Student_Name4: '' })

    useEffect(() => {
        //logic to connect API --- read all records
        axios
            .get("http://localhost:3001/projects")
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error));
    }, []);

    //logic to connect API --- to post records
    const createRecord = () => {
        axios
            .post("http://localhost:3001/projects", newRecord)
            .then((response) => {
                alert('Record Added Successfully')
                setCreateForm(false)
            })
            .catch((error) => console.log(error));
    }


    return (
        <>

            <div className="row">
                <div className="col-md-12">
                    <button onClick={() => setCreateForm(true)} className="btn btn-success">Add Post</button>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-12">
                    <h4 className="bg-secondary text-white text-center">POST LIST</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered text-center text-secondary">
                        <thead>
                            <tr key="">
                                <th>ID</th>
                                <th>Title</th>
                                <th>Guide</th>
                                <th>Year</th>
                                <th>Students</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts ? posts.map((p, index) => (
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

            {/* Form */}
            <div className="row mt-4">
                <div className="col-md-12">
                    {
                        showCreateForm ?
                            <>
                                <div className="container row border">
                                    <label>Title</label>
                                    <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, title: event.target.value })} />

                                    <label>Body</label>
                                    <input type="text" className="form-control" onChange={(event) => setNewRecord({ ...newRecord, body: event.target.value })} />

                                    <button onClick={createRecord} className="btn btn-success mt-4">Create</button>

                                </div>
                            </> : null
                    }
                </div>
            </div>
            <br />


        </>
    )
}
