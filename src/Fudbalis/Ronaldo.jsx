import React from 'react'


function Ronaldo({name,img,surname,firstnami,age,email,phone}) {
    
    
    return (
        <div className="blocklist">
            <div className="block-1">
                <div className="img-1">
                    <h2>{name}</h2>
                    <img src={img} alt="" />
                </div>
                <div className="user">
                    <h3> <span> Surname:</span>  {surname}</h3>
                    <h3> <span> Firstname:</span>  {firstnami}</h3>
                    <h3> <span> Age: </span>  {age}</h3>
                    <h3> <span> Email:</span>   {email}</h3>
                    <h3><span> PhoneNumber:</span>  {phone}</h3>
                    <button className="button">Sing up</button>
                    <img src="https://sun9-6.userapi.com/c855124/v855124178/9030/p0aW8acW5vE.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Ronaldo
