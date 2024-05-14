// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useRouteError, BrowserRouter } from 'react-router-dom';

// const LogOut = () => {
//   const dispatch = useDispatch();
//   const routeError = useRouteError(); // Assuming useRouteError is a valid custom hook to get route error information

//   const handleLogout = () => {
//     if (window.confirm('Are you sure you want to exit?')) {
//       dispatch(routeError(null)); // Dispatching the routeError action to log the user out
//     }
//   };

//   return (
//     <BrowserRouter>
//       <button onClick={handleLogout}>Logout</button>
//     </BrowserRouter>
//   );
// };

// export default LogOut;
