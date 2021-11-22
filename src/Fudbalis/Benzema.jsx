import React from 'react'

function Benzema({f,i,y,e,t,r}) {
    return (
        <div className="blocklist">
            <div className="block-3">
                <div className="img-3">
                    <h2>Benzema</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd97-YvEmLXBUwYIqValaf-_4XMCi3xXC9KA&usqp=CAU" alt="" />
                </div>
                <div className="user2">
                    <h3> <span> Surname:</span>  {f}</h3>
                    <h3> <span> Firstname:</span>  {i}</h3>
                    <h3> <span> Age: </span>  {y}</h3>
                    <h3> <span> Email:</span> {e}</h3>
                    <h3><span> PhoneNumber:</span>  {t}</h3>
                    <button className="Start">Start</button>
                    <img src={r} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Benzema
