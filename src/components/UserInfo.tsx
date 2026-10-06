"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserInfo = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [loading, setLoading] = useState(false);

  const user = session?.user;

  const handleSignout = async () => {
    try {
      setLoading(true);

      const { error } = await authClient.signOut();

      if (error) {
        console.error("Sign out error:", error);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="absolute right-4 top-4 z-50">
        <span className="loading loading-spinner loading-sm text-red-700" />
      </div>
    );
  }

  return (
    <div className="absolute right-4 top-4 z-100">
      {user ? (
        /* Logged in */
        <div className="dropdown dropdown-end">
          {/* Profile Button */}
          <button
            tabIndex={0}
            type="button"
            className="flex items-center gap-2 rounded-full border border-base-300 bg-base-100 p-1 pr-3 shadow-sm transition-all hover:border-red-300 hover:shadow-md"
          >
            <div className="avatar">
              <div className="w-10 rounded-full ring-2 ring-red-600 ring-offset-1 ring-offset-base-100">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-lg font-bold text-white">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <span className="hidden max-w-24 truncate text-sm font-semibold sm:block">
              {user.name}
            </span>

            <span className="text-xs text-base-content/50">
              ▼
            </span>
          </button>

          {/* Dropdown */}
          <ul
            tabIndex={0}
            className="menu dropdown-content z-999 mt-3 w-60 rounded-xl border border-base-300 bg-base-100 p-2 shadow-2xl"
          >
            {/* User Info */}
            <li className="pointer-events-none mb-1">
              <div className="flex flex-col items-start px-3 py-2">
                <span className="font-bold text-base-content">
                  {user.name}
                </span>

                <span className="max-w-full truncate text-xs text-base-content/60">
                  {user.email}
                </span>
              </div>
            </li>

            <div className="divider my-0" />

            {/* Profile */}
            <li>
              <Link
                href="/profile"
                className="rounded-lg hover:bg-red-50 hover:text-red-700"
              >
                <span>👤</span>
                <span>প্রোফাইল</span>
              </Link>
            </li>

            {/* Sign Out */}
            <li>
              <button
                type="button"
                onClick={handleSignout}
                disabled={loading}
                className="rounded-lg text-error hover:bg-red-50"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-xs" />
                    সাইন আউট হচ্ছে...
                  </>
                ) : (
                  <>
                    <span>↪</span>
                    <span>সাইন আউট</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      ) : (
        /* Logged out */
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="btn btn-ghost btn-sm font-semibold text-neutral-700 transition-colors hover:bg-red-50 hover:text-red-700"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm border-0 bg-red-700 px-4 font-semibold text-white shadow-sm transition-all hover:bg-red-800 hover:shadow-md"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;