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
        const fetchUserProfile = async () => {
            try {
                await dispatch(getUserProfile(username));
            } catch (error) {
                if (error?.response?.status === 400) {
                    navigate('/user-not-found');
                }
                console.error( error);
            }
        };

        fetchUserProfile();
    }, [dispatch]);
 

    return (
        <div>
            <HeroSection />
            <Resume  />
        </div>
    )
}

export default Home