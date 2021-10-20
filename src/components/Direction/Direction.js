import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { useState } from 'react';


const location = {
    lat: 22.824638,
    lng: 91.101733
};

const Direction = () => {
    const [response, setResponse] = useState(null);
    const directionsCallback = (res) => {
        if (res !== null) {
            setResponse(res)
        }
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>

            <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                    height: '400px',
                    width: '70vw'
                }}
                // required
                zoom={15}
                // required
                center={location}

            >

                <DirectionsService
                    // required
                    options={{
                        origin: 'Dhaka',
                        destination: 'Noakhali',
                        travelMode: 'WALKING'
                    }}
                    // required
                    callback={directionsCallback}

                />


                {
                    response !== null && (
                        <DirectionsRenderer
                            // required
                            options={{
                                directions: response
                            }}

                        />
                    )
                }
            </GoogleMap>
        </LoadScript>
    );
};

export default Direction;