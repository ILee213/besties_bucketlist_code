import { useBucketsContext } from "../hooks/useBucketsContext"
import { useState } from "react"
import Popup from './Popup'
import React from "react"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Link } from "react-router-dom"
import Edit from "../pages/Edit"

const BucketDetails = ({bucket}) => {
    const {dispatch} = useBucketsContext()
    const [buttonPopup, setButtonPopup] = useState(false);

    const handleClick = async() => {
        const response = await fetch('http://localhost:3001/api/bucket_items/' + bucket._id, {
            method: 'DELETE'
        })
        const jso = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_BUCKET', payload: jso})
        }
    }
    
    //edit attempt
    const handleEdit = async() => {
        /*
        const response = await fetch('http://localhost:3001/api/bucket_items/' + bucket._id, {
            method: 'PATCH'
        })
        */

        /*
            <Popup trigger={buttonPopup}>
                <h3>My popup</h3>
            </Popup>
        */

    }
    return(
        <div className="bucket-details">
            <main>
                <h4>{bucket.activity}</h4>
                <p><strong> Creator : </strong>{bucket.creator}</p>
                <p><strong> Priority : </strong>{bucket.priority}</p>
                <p><strong> Attendees : </strong>{bucket.attendees}</p>
                <p><strong> Date : </strong>{bucket.date}</p>
                <p><strong> Location : </strong>{bucket.location}</p>
                <p>{formatDistanceToNow(new Date(bucket.createdAt), {addSuffix: true})}</p>
                <span onClick={handleClick}>complete</span>
                <Link to={`/edit/${bucket._id}`}>Edit</Link>
            </main>
        </div>
    )
}

/*
New plan:
Put a link inside the span onClick
or change it into a button

then take it to new page, and create basically the form in there and use new button

that button will have the handler stuff in it instead. 

then incorporate the id fetching components 
*/

//<Link to="/edit" className="btn btn-success"> Edit +</Link>
//<span2 onClick={<Link to="/edit">Edit</Link>}>edit</span2>

export default BucketDetails