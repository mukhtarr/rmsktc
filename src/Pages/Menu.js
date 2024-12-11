import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/Dashboard">RMS</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" to="/posts">Posts</Link>
              <Link class="nav-link" to="/project">Project</Link>
              <Link class="nav-link" to="/internship">Internship</Link>
              <Link class="nav-link" to="/expert">Expert Talk</Link>
              <Link class="nav-link" to="/feedback">Feedback</Link>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
