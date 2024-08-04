import { useEffect } from "react"
import Resume from "../resume/Resume"
import HeroSection from "./hero-section/HeroSection"
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../service/portfolio/portfolio-service";
import { useNavigate, useParams } from "react-router";

const Home = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        fetchUserProfile();
    }, [dispatch]);
 
    const fetchUserProfile = async () => {
        try {
            await dispatch(getUserProfile(username));
        } catch (error) {
            if (error?.response?.status === 400 || error?.response?.status === 404) {
                navigate('/user-not-found', { state: { errorStatusCode:error?.response?.status} });
            }
        }
    };

    return (
        <div>
            <HeroSection />
            <Resume  />
        </div>
    )
}

export default Home