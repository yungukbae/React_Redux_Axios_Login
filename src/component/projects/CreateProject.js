import React, { Component } from 'react'
import {createProject} from '../../store/action/projectAction'
import {connect} from 'react-redux'

class CreateProject extends Component {

    state = {
        title:'',
        content:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    //현재 state를 담아 dispatch해서 proejectAction으로 보낸다.
    return{
        createProject:(project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
