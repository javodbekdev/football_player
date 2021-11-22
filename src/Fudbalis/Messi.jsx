import React from 'react'

function Messi({fam,ism,yosh,pochta,tel,rasim}) {
    return (
        <div className="blocklist">
            <div className="block-2">
                <div className="img-2">
                    <h2>Messi</h2>
                    <img src={rasim} alt="" />
                </div>
                <div className="user1">
                    <h3> <span> Surname:</span>  {fam}</h3>
                    <h3> <span> Firstname:</span>  {ism}</h3>
                    <h3> <span> Age: </span>  {yosh}</h3>
                    <h3> <span> Email:</span> {pochta}</h3>
                    <h3><span> PhoneNumber:</span>  {tel}</h3>
                    <button className="clisk">Button</button>
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1200px-FC_Barcelona.svg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Messi
