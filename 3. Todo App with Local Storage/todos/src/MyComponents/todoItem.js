import React from 'react'

export const todoItem = (props) => {
    return (
        <div className="row container mt-3 mb-3">
            <h4 className="col-2">{props.todo.sno}</h4>
            <h4 className="col-3">{props.todo.title}</h4>
            <h4 className="col-3">{props.todo.description}</h4>
            <button className="btn btn-sm btn-danger col-2" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}

export default todoItem
