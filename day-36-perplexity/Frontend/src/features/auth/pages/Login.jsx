import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    await handleLogin(email, password);
    navigate("/");
  };

  if(!loading && user) {
    return <Navigate to="/" replace/>
  }

  return (
    <main className="min-h-screen bg-[#061317] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-2">
          <div className="hidden bg-[radial-gradient(circle_at_top,_rgba(49,184,198,0.35),_transparent_55%),linear-gradient(180deg,_rgba(49,184,198,0.14),_rgba(6,19,23,0.95))] p-10 md:flex md:flex-col md:justify-between">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#31b8c6]/40 bg-[#31b8c6]/10 px-4 py-1 text-sm text-[#7ce7f1]">
                Welcome back
              </p>
              <h1 className="max-w-sm text-4xl font-semibold leading-tight">
                Sign in to continue your workspace.
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Access your account with your email and password, then continue
              where you left off.
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="mx-auto w-full max-w-md">
              <p className="text-sm uppercase tracking-[0.3em] text-[#31b8c6]">
                Login
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Sign in to your account
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Enter your credentials below.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmitForm}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1b20] px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/30"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1b20] px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/30"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#31b8c6] px-4 py-3 font-semibold text-[#061317] transition hover:bg-[#59d6e4]"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-[#31b8c6] transition hover:text-[#7ce7f1]"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
