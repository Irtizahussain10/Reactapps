import React, { useEffect, useState } from 'react';

export default function Tables() {

    let [Data, setData] = useState({});
    
    useEffect(()=>{
        async function gettingData(){
            const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "79b741c8b9mshc65ab78f11de9f7p1c45c0jsn4c92ae7bfab3",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            });
            let data = response.json();
            setData(data);
            console.log(data);
        };
        gettingData();
    },[]);

    return (
        <div>
            
        </div>
    )

}