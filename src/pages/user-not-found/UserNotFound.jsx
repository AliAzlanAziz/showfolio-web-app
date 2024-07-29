
const UserNotFound = () => {
  return (
    <div className='d-flex justify-content-center align-items-center header-section'>
    <div>
    <h1>Either profile does not exist or is not published!</h1>
    <div className='d-flex justify-content-center'>
    <img src='../../../public/user-not-found.png'/>
    </div>
    </div>
    </div>
  )
}

export default UserNotFound