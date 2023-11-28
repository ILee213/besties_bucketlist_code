import React from "react"

//edit details
import { useParams, useNavigate } from "react-router-dom"

import { useState } from "react"
import { useBucketsContext } from "../hooks/useBucketsContext"
import { Link } from "react-router-dom"

const BucketEdit = () => {
    const {dispatch} = useBucketsContext()

    
    //edit details
    const{id} = useParams()

    const [activity, setActivity] = useState('')
    const [attendees, setAttendees] = useState('')
    const [priority, setPriority] = useState('')
    const [date, setDate] = useState('')
    const [creator, setCreator] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    /*
    const handleSubmit = async (e) => {
        e.preventDefault()

        
        //const bucket = {activity, attendees, priority, date, creator, location}

        const response = await fetch('http://localhost:3001/api/bucket_items/'+id, {
            method: 'PATCH',
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setActivity('')
            setAttendees('')
            setPriority('')
            setDate('')
            setCreator('')
            setLocation('')
            setError(null)
            console.log('bucket updated', json)
            dispatch({type: 'SET_BUCKETS', payload: json})
        }
        
        
    }
    */

    //ATTEMPT AT EDIT BUCKET!!!
    const handleEdit = async (e) => {
        e.preventDefault();
    
        const updatedBucket = {
            activity,
            attendees,
            priority,
            date,
            creator,
            location,
        };
    
        try {
            const response = await fetch(`http://localhost:3001/api/bucket_items/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(updatedBucket),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const json = await response.json();
    
            if (!response.ok) {
                setError(json.error);
            } else {
                setActivity('');
                setAttendees('');
                setPriority('');
                setDate('');
                setCreator('');
                setLocation('');
                setError(null);
                console.log('Bucket updated', json);
    
                // Assuming 'json' is the updated bucket data received from the server
                dispatch({ type: 'UPDATE_BUCKET', payload: json });
                
                // Redirect to the home page or any other page after successful update
                navigate('/');
            }
        } catch (error) {
            setError('An error occurred while updating the bucket.');
            console.error('Error updating bucket:', error);
        }
    };
    //ATTEMPT AT EDIT BUCKET

    return (
        <form className="create" onSubmit={handleEdit}>
            <h3>Edit Bucket</h3>

            <label>Activity Name: </label>
            <input
                type="text"
                onChange={(e) => setActivity(e.target.value)}
                value={activity}
            />

            <label>Date: </label>
            <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />

            <label>Priority: </label>
            <input
                type="number"
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
            />

            <label>Attendees: </label>
            <input
                type="number"
                onChange={(e) => setAttendees(e.target.value)}
                value={attendees}
            />

            <label>Location Name: </label>
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

            <label>Creator: </label>
            <input
                type="text"
                onChange={(e) => setCreator(e.target.value)}
                value={creator}
            />

            <button>Edit Bucket</button>
            <Link to="/">Return to Home</Link>

            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BucketEdit

// function Edit() {
//     return(
//         <div>
//             Edit User
//         </div>
//     ) 
// }

// export default Edit