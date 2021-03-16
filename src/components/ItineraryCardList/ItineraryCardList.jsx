import React from 'react'
import { ItineraryLeg } from '../ItineraryLeg'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { useQuery } from 'react-query'

export const ItineraryCardList = () => {

    const { isLoading, error, data: itineraryListData, isFetching } = useQuery('GetItineraryList', () => fetch(
        "http://localhost:8080/itineraries"
    ).then((res) => res.json())
    )

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


    return (
        <>
            {
                itineraryListData.map((itinerary) => <Card variant="outlined">
                    {
                        itinerary.legs.map((leg) => <ItineraryLeg id={leg} />)
                    }
                    <CardContent>
                        <Typography variant="h5" component="h2">{itinerary.price}</Typography>
                        <Typography color="textSecondary" variant="h6" component="h6">{itinerary.agent}</Typography>
                    </CardContent>
                </Card>
                )
            }
        </>
    )
}