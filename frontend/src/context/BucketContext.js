//tester

import { createContext, useReducer } from "react";

export const BucketsContext = createContext()

export const bucketsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_BUCKETS':
            return {
                buckets: action.payload
            }
        case 'CREATE_BUCKET':
            return{
                buckets: [action.payload, ...state.buckets]
            }
        //MY ATTEMPT WITH EDIT
        case 'UPDATE_BUCKET':
            const updatedBucketIndex = state.buckets.findIndex(b => b._id === action.payload._id);
            if (updatedBucketIndex === -1) {
                // Bucket not found, return the current state
                return state;
            }

            // Create a new array with the updated bucket
            const updatedBuckets = [...state.buckets];
            updatedBuckets[updatedBucketIndex] = action.payload;

            return {
                buckets: updatedBuckets
            }     
        //MY ATTEMPT WITH EDIT
        case 'DELETE_BUCKET':
            return{
                buckets: state.buckets.filter((b) => b._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const BucketsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(bucketsReducer, {
        buckets: null
    })


    return (
        <BucketsContext.Provider value={{...state, dispatch}}>
            {children}
        </BucketsContext.Provider>
    )
}