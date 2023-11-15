import{ useEffect }from 'react'
import { useBucketsContext } from '../hooks/useBucketsContext'

//components

import BucketDetails from '../components/BucketDetails'
import BucketForm from '../components/BucketForm'


const Home = () => {

    const {buckets, dispatch} = useBucketsContext()

    useEffect(() => {
        const fetchBuckets = async () => {
            const response = await fetch('http://localhost:3001/api/bucket_items/')
            const jso = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_BUCKETS', payload: jso})
            }
        }
        fetchBuckets()
    }, [dispatch])
    

    return (
        <div className="home">
            <div className='buckets'>
                {buckets && buckets.map((bucket) => (
                    <BucketDetails key={bucket._id} bucket = {bucket}/>
                ))}
            </div>
            <BucketForm />
        </div>
    )
}


export default Home