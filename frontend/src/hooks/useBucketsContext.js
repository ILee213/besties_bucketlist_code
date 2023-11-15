import { BucketsContext } from "../context/BucketContext";
import { useContext } from "react";

export const useBucketsContext = () => {
    const context = useContext(BucketsContext)

    if (!context) {
        throw Error('useBucketsContext must be used inside a BucketsContextProvider')
    }

    return context
}