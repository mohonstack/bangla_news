"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const user = {
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        console.error("Sign up error:", error);
        toast.error(error.message || "Something went wrong!");
        return;
      }

      if (data) {
        console.log("Sign up successful:", data);
        toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে!");

        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("সাইন আপ করতে সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("Google sign up error:", error);
      toast.error("Google দিয়ে সাইন আপ করা যায়নি!");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
    } catch (error) {
      console.error("GitHub sign up error:", error);
      toast.error("GitHub দিয়ে সাইন আপ করা যায়নি!");
    }
  };

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">

          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-red-700">
              সাইন আপ
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={onSubmit}>
            <fieldset className="space-y-4">

              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  নাম
                </label>

                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="আপনার নাম"
                  required
                />
              </div>

              {/* Image */}
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  Image URL
                </label>

                <input
                  name="image"
                  type="url"
                  className="input w-full"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  ইমেইল
                </label>

                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-1 block text-sm font-semibold">
                  পাসওয়ার্ড
                </label>

                <input
                  name="password"
                  type="password"
                  className="input w-full"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  minLength={8}
                  required
                />
              </div>

              {/* Sign Up */}
              <button
                type="submit"
                disabled={loading}
                className="btn mt-2 w-full border-0 bg-red-700 text-white hover:bg-red-800"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    অ্যাকাউন্ট তৈরি হচ্ছে...
                  </>
                ) : (
                  "সাইন আপ করুন"
                )}
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-xs font-medium text-base-content/50">
              অথবা
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn w-full border border-base-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.16c1.85-1.7 2.9-4.2 2.9-7.22Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.5c2.65 0 4.87-.88 6.49-2.38l-3.16-2.45c-.88.59-2.01.94-3.33.94-2.56 0-4.73-1.73-5.51-4.06H3.22V16.1A9.8 9.8 0 0 0 12 21.5Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.49 13.55A5.9 5.9 0 0 1 6.18 12c0-.54.11-1.06.31-1.55V8H3.22A9.5 9.5 0 0 0 2.2 12c0 1.53.37 2.97 1.02 4.23l3.27-2.68Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.39c1.44 0 2.73.5 3.75 1.48l2.81-2.81C16.86 3.5 14.65 2.5 12 2.5a9.8 9.8 0 0 0-8.78 5.5l3.27 2.45C7.27 8.12 9.44 6.39 12 6.39Z"
                />
              </svg>

              <span>Continue with Google</span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={handleGithubSignIn}
              className="btn w-full border border-gray-800 bg-gray-900 text-white shadow-sm hover:bg-gray-800"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.91c.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.35-1.3-1.71-1.3-1.71-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>

              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-xs text-base-content/50">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <a
              href="/signin"
              className="font-semibold text-red-700 hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;