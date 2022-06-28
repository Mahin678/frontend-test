import React, {useEffect , useState } from 'react';
import "./style.css";
const DeviceDashboard = () => {
    const [active, setActive] = useState([])
    const [userData, setData] = useState({
        name:"Mahin Tazuar",
        repoUrl:"https://github.com/Mahin678",
        message: "Hello world Its NiGHT Time",
        email: "mahintazuar678@gmail.com",
    })
        useEffect(() => {
        setInterval(() => 
            fetch("http://35.201.2.209:8000/devices")
            .then((response) => response.json())
            .then((res) => setActive(res.devices))
        , 5000);
        },[])


        
    const handleNotify = () => {
        // fetch('http://35.201.2.209:8000/login', {
        //     method: "POST",
        //     body: JSON.stringify(userData),
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        // }
        // })  
        // .then(res=> {
        //     console.log(res)
        // })
    }
    return (
        <div className='active-device'>
            <div className='active-device__content'>
                {active.length && <h2>{active.length}</h2>}
              
                <p>Device <br/> Online</p>
            </div>
                {
                    active.map(dt => <span key={dt.id} style={{"top": `${((Math.random() * (80 - 20)) + 20)}%`, "left":`${((Math.random() * (80 - 20)) + 20)}%`,"backgroundColor": `#${Math.floor(Math.random()*16777215).toString(16)}` }} className="active-user-bubble"></span> )
                }
            
            <div className='active-device__control'>
                <button className='active-device__notify' onClick={()=> handleNotify()}>Notify</button>
                <button className='active-device__logout'>Log Out</button>
            </div>
        </div>
    );
};

export default DeviceDashboard;