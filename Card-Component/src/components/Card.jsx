import React, { useState } from 'react'
import "./Card.css"
const Card = (props) => {
    const [Liked, setLike] = useState(false)
    return (
        <div className='card'>
            <h1>Movie Title🍿: {props.title}</h1>
            <p>IMDB Rating⭐: {props.Rating}</p>
            <p>Status💫: {Liked ? "Liked 💕" : "Not liked 😞"}</p>
            <button onClick={() => { setLike(!Liked) }}>{Liked ? "UnLike" : "like"}</button>
        </div>
    )
}

export default Card