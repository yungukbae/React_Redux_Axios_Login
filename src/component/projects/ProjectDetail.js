import React from 'react'

export default function ProjectDetail(props) {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project title - {id}</span>
                <p>Hey gang, in this React, Redux & Firebase tutorial we'll create the template for our project details component.</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by yunguk</div>
                <div>2nd September ,2am</div>
            </div>

        </div>
            
        </div>
    )
}
