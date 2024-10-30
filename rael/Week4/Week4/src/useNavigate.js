import { Navigate, replace } from "react-router-dom";

<button onClick={() => Navigate('/profile', {
  replace: false, 
  state: {userId: 123, userName: 'JohnDoe'}
})}>
  View Profile
</button>