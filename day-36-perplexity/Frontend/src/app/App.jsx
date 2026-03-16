import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import { useAuth } from "../features/auth/hook/useAuth";
import { useEffect} from 'react';

const App = () => {

  const auth = useAuth();

  useEffect(() => {
    auth.handleGetMe();
  }, [])

  // hydration logic to check if user is already logged in and fetch user data

  return <RouterProvider router={router} />;
};

export default App;
