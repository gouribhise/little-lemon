import restaurantFood from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'
const Hero =()=>{
    return (
       <header className="hero">
<article>
    <h1>Little Lemon</h1>
    <h4>Chicago</h4>
    <p>We are family owned Meditarian restaurant, focused on traditional recipes served with a modern twist.</p>
    <Link to="/reservations"><button id="reserve_btn">Reserve A Table</button></Link>
</article>
 
<img src={restaurantFood} alt='restaurant food image'/>
 
       </header>
    )
}

export default Hero