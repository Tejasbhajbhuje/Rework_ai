import { NavBar } from "../components/NavBar"
import { ForEmpoyers } from "./forEmployers"
import { Hero} from '../components/Hero.js'

export const Home=()=>{
    return(
        <div>
            <NavBar/>
            <Hero/>
            <ForEmpoyers></ForEmpoyers>
        </div>
    )
}