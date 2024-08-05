import { useLocation } from "react-router";

const UserNotFound = () => {
  const location = useLocation();
 
  return (
    <div className='d-flex justify-content-center align-items-center header-section'>
      <div>
        {location?.state?.errorStatusCode === 404 ? (
          <h1>Portfolio does not exist!</h1>

        ) : location?.state?.errorStatusCode === 400 && (
          <h1>Either profile does not exist or is not published!</h1>

        )}
        <div className='d-flex justify-content-center'>
          <img src='../../../public/user-not-found.png' />
        </div>
      </div>
    </div>
  )
}

export default UserNotFound