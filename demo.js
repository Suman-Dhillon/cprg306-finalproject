"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log("Error in Signing in with GitHub: ", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log("Error in Signing out ", error);
    }
  };

  return (
    <div>
      <p>Welcome to Helping Hands</p>
      {user ? (
        <>
          <p>Signed in as ({user.email})</p>
          <button onClick={handleSignOut} class="text-lg hover:underline">
            Sign Out
          </button>
        </>
      ) : (
        <button onClick={handleSignIn} class="text-lg hover:underline">
          Sign In
        </button>
      )}
      <a class="text-lg hover:underline" href="/pages">
        Let's get started
      </a>
    </div>
  );
}
