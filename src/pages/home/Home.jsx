import { useEffect } from "react"
import Resume from "../resume/Resume"
import HeroSection from "./hero-section/HeroSection"
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../service/portfolio/portfolio-service";
import { useParams } from "react-router";

const Home = () => {
    const dispatch = useDispatch();
    const { username } = useParams();

    useEffect(() => {
        dispatch(getUserProfile(username))
    }, [])

    return (
        <div>
            <HeroSection />
            <Resume  />
        </div>
    )
}

export default Home