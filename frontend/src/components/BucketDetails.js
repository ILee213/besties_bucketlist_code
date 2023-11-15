import { useBucketsContext } from "../hooks/useBucketsContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BucketDetails = ({bucket}) => {
    const {dispatch} = useBucketsContext()

    const handleClick = async() => {
        const response = await fetch('http://localhost:3001/api/bucket_items/' + bucket._id, {
            method: 'DELETE'
        })
        const jso = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_BUCKET', payload: jso})
        }
    }
    
    const handleEdit = async() => {
        const response = await fetch('http://localhost:3001/api/bucket_items/' + bucket._id, {
            method: 'PATCH'
        })
    }
    return(
        <div className="bucket-details">
            <h4>{bucket.activity}</h4>
            <p><strong> Creator : </strong>{bucket.creator}</p>
            <p><strong> Priority : </strong>{bucket.priority}</p>
            <p><strong> Attendees : </strong>{bucket.attendees}</p>
            <p><strong> Date : </strong>{bucket.date}</p>
            <p><strong> Location : </strong>{bucket.location}</p>
            <p>{formatDistanceToNow(new Date(bucket.createdAt), {addSuffix: true})}</p>
            <span onClick={handleClick}>complete</span>
            <span2 onClick={handleEdit}>edit</span2>
        </div>
    )
}

export default BucketDetails