import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import React, { useEffect } from "react";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  // Debugging: Log the fetched user data
  useEffect(() => {
    console.log("Fetched User:", currentUser);
  }, [currentUser]);

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    console.warn("User not found or API did not return data.");
    return <span>User not found</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
