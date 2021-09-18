import React, { Component } from 'react'
import '../css/app.css'
import betta from '../imgs/Lela.jpg'
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className = "first_page_body">
<div>
<img className= "betta_img" alt = 'betta' src = {betta}/>
</div>


<div className = "greeting">
Hello<br/>
I am <br/>
Abhinav
</div>

<Link>
<div className = "github">
    Github
</div>
</Link>

<Link to = '/join'>
<div className = "join">
Email
</div>
</Link>


<div className = "know_more_back">  
</div>
<Link to = '/knowmore'>
 <div className = "know_more">
Know more
</div>
</Link>   


<footer className = "first_footer">

</footer>



            </div>
        )
    }
}
export default Home