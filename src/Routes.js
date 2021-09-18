import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './layout'
import Home from './components/home'
import Knowmore from './components/Know/knowmore'


const Routes = () =>{
return(
<div>
<Layout>
<Switch>
<Route path = '/' exact component = {Home}/>
<Route path = '/knowmore' exact component ={Knowmore}/>

</Switch>
</Layout>
</div>



)

}

export default Routes