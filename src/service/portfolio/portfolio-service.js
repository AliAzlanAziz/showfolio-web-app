import axios from "axios";

export const getUserProfile = (username) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_PROFILE_REQUEST",
        });
       
        const config = {
            headers: {
                Authorization: "Token ]=q;d-4o3r-04o]-SGHA*(QYH(T#*fw#:#$POj;soc.3wf-04DAJ"
            }
        }
        const { data } = await axios.get(`https://snow-spoonbill-302508.hostingersite.com/user/username/${username}`, config);
      
        dispatch({
            type: "GET_PROFILE_SUCCESS",
            payload: data,
        });
        return data;


    } catch (error) {
         dispatch({
            type: "GET_PROFILE_FAILURE",
            payload: 'Something went wrong',
        });
    }
};