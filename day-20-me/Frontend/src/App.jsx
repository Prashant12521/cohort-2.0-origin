import { RouterProvider } from "react-router";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import AppRoutes from "./AppRoutes";
import "./style.scss";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
