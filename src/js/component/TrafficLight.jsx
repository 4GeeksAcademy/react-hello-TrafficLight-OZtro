import React, { useState } from "react";

const TrafficLight = () => {

    const [turnOn, setTurnOn] = useState('red');

    const changeLight = (color) => {
        setTurnOn(color)
    }


    return (
        <main>
            <div className="support"></div>
            <div className="boxTraffic">

                <div 
                    className={`red ${turnOn == 'red' ? 'light-on' : '' }`}
                    onClick={() => changeLight ('red')}
                ></div>

                <div 
                    className={`yellow ${turnOn == 'yellow' ? 'light-on' : '' }`}
                    onClick={() => changeLight ('yellow')}
                ></div>

                <div 
                    className={`green ${turnOn == 'green' ? 'light-on' : '' }`}
                    onClick={() => changeLight ('green')}
                ></div>

            </div>


        </main>
    )

}

export default TrafficLight