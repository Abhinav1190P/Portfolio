import React from 'react'
import mern from '../../imgs/mern.png'
import py from '../../imgs/pyreal.png'
import cloud from '../../imgs/clouds.jpg'
import ig from '../../imgs/Ig.png'
import Facebook from '../../imgs/Facebook.png'
import tweet from '../../imgs/tweet.png'
import {Link} from 'react-router-dom'
const Knowmore = () =>{
return(
<div className = "second_page">
   
<div className = "about_me">
    About me
</div>
<div className = "about_me_container">
“Hello i am Abhinav, a web developer. This is my portfolio website. <br/> Below are the technologies i currently work with.
Do contact if you want to collaborate.”
</div>


<div className = "technologies">
Technologies
</div>

<div className = "technologies_container">

<div>
    <img className = "mern" alt = "mern"  src = {mern}/>
    <img className = "python" alt = "py" src = {py}/>
</div>

</div>

<footer className= "second_footer">

<a href = "ing">
<div>
    <img className="insta" src = {ig} alt = 'ig'/>
</div>
</a>

<a href = "face">

<div>
    <img className = "facebook" alt = "facebook" src = {Facebook}/>
</div>

</a>


<a href = "twit">
<div>
    <img className = "tweeter" alt = "tw" src = {tweet}/>
</div>
</a>

<div className = "go_home">
</div>

<Link to = '/'>
<div className = "home">
Home  
</div>
</Link>

</footer>


<div>
<img className = "cloud_image" alt = "cloud" src = {cloud}/>
</div>

<div className = "quote">
“Perhaps it is good to have a beautiful mind, but an even greater gift is to discover a beautiful heart.”
</div>




</div>

)

}

export default Knowmore