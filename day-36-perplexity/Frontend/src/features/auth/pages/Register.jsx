import { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const registerData = {
      username,
      email,
      password,
    };

    console.log("Register form submitted:", registerData);
  };

  return (
    <main className="min-h-screen bg-[#061317] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-2">
          <div className="order-2 p-6 sm:p-10 md:order-1">
            <div className="mx-auto w-full max-w-md">
              <p className="text-sm uppercase tracking-[0.3em] text-[#31b8c6]">
                Register
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Create your account
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Fill in your details to get started.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmitForm}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200">
                    Username
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Choose a username"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1b20] px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/30"
                    required
                  />
                </label>

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
                    placeholder="Create a password"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b1b20] px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/30"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#31b8c6] px-4 py-3 font-semibold text-[#061317] transition hover:bg-[#59d6e4]"
                >
                  Register
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#31b8c6] transition hover:text-[#7ce7f1]"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <div className="order-1 bg-[radial-gradient(circle_at_top,_rgba(49,184,198,0.35),_transparent_55%),linear-gradient(180deg,_rgba(49,184,198,0.14),_rgba(6,19,23,0.95))] p-10 md:order-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-4 inline-flex rounded-full border border-[#31b8c6]/40 bg-[#31b8c6]/10 px-4 py-1 text-sm text-[#7ce7f1]">
                  Join now
                </p>
                <h1 className="max-w-sm text-4xl font-semibold leading-tight text-white">
                  Build your account and start exploring right away.
                </h1>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-300">
                Register with your username, email, and password, then move
                straight into the experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
