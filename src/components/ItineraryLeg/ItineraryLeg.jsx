import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useQuery } from 'react-query'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import moment from 'moment'

export const ItineraryLeg = ({ id }) => {

    const { isLoading, error, data: itineraryLegData, isFetching } = useQuery(`GetItineraryLeg${id}`, () => fetch(
        `http://localhost:8080/leg/${id}`
    ).then((res) => res.json())
    )

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    item
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs='6'
                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                            xs='2'
                        >
                        <div style={{width: '30px'}}>
                            <img src={`https://logos.skyscnr.com/images/airlines/favicon/${itineraryLegData.airline_id}.png`} width="100%"/>
                        </div>
                        </Grid>
                        <Grid
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                            xs='4'
                        >
                            <Typography>{moment(itineraryLegData.departure_time).format('HH:mm')}</Typography>
                            <Typography>{itineraryLegData.departure_airport}</Typography>
                        </Grid>
                        <Grid
                            item
                            direction="row"
                            justify="center"
                            alignItems="center"
                            xs='2'
                        >
                            <ArrowForwardIcon />
                        </Grid>
                        <Grid
                            item
                            direction="column"
                            justify="center"
                            alignItems="center"
                            xs='4'
                        >
                            <Typography>{moment(itineraryLegData.arrival_time).format('HH:mm')}</Typography>
                            <Typography>{itineraryLegData.arrival_airport}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs='6'
                >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-end"
                    >
                        <Typography>{Math.floor(itineraryLegData.duration_mins / 60)}h {itineraryLegData.duration_mins % 60}</Typography>
                        <Typography>{itineraryLegData.stops === 0 ? 'Direct' : `${itineraryLegData.stops} ${itineraryLegData.stops === 1 ? 'stop' : 'stops'}`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}