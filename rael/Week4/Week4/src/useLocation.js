const ProfilePage = () => {
    const location = useLocation();
    const { userId, userName } = location.state || {} ;
  
    return (
      <div>
        <h1>Profile Page</h1>
        <p>User ID: {userId}</p>
        <p>User Name: {userName}</p>
      </div>
    )
  }