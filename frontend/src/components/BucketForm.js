import { useState } from "react"
import { useBucketsContext } from "../hooks/useBucketsContext"

const BucketForm = () => {
    const {dispatch} = useBucketsContext()

    const [activity, setActivity] = useState('')
    const [attendees, setAttendees] = useState('')
    const [priority, setPriority] = useState('')
    const [date, setDate] = useState('')
    const [creator, setCreator] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const bucket = {activity, attendees, priority, date, creator, location}

        const response = await fetch('http://localhost:3001/api/bucket_items/', {
            method: 'POST',
            body: JSON.stringify(bucket),
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
            console.log('new bucket added', json)
            dispatch({type: 'CREATE_BUCKET', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Bucket</h3>

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

            <button>Add Bucket</button>

            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BucketForm