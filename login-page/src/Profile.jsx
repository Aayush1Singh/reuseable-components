/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "redux-toolkit";
// import { handleSubmit } from "react-hook-form";
function ProfilePhoto(url) {
  return (
    <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
      <img src={url} alt="Profile" />
    </div>
  );
}
const Profile = (data) => {
  const { url, name, qualification, location, followers, id } = {
    name: "Aayush",
    url: "#",
    qualification: "Student at NSUT",
    location: "Delhi, India",
    followers: 1000,
    id: 1,
  };

  const {
    id: currentUserId,
    name: currentUserName,
    location: currentUserLocation,
    followers: currentUserFollowers,
  } = { id: 1 };
  // useSelector((state) => state.user);
  function onSubmit(data) {}
  return (
    <div className="login-background flex min-h-screen justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Cover Image */}
        <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-orange-500 via-red-400 to-yellow-300">
          <div className="bg-opacity-40 absolute inset-0 bg-white mix-blend-overlay"></div>
        </div>

        {/* Profile Info */}
        <div className="-mt-16 flex flex-col items-center p-6">
          {/* Profile Image */}
          <ProfilePhoto url={url}></ProfilePhoto>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-gray-600">{qualification}</p>
          <p className="text-sm text-gray-500">{location}</p>

          {/* Stats */}
          <div className="mt-4 flex space-x-4">
            <span className="font-semibold text-blue-600">{followers}</span>
            <span className="text-gray-500">followers</span>
          </div>

          {/* Actions */}
          <div className="mt-4 flex space-x-4">
            <button className="login-button">Follow</button>
            {/* <button className="rounded-md border px-4 py-2 font-medium shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200">
              More
            </button> */}
          </div>
        </div>
        {currentUserId === id && (
          <form className="max-w-fit-content flex flex-col items-center justify-center p-6">
            {/* Form Fields */}
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Edit Profile
            </h2>
            <div>
              <label className="mt-4 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={currentUserName}
                // onChange={handleChange}
                className="mt-1 w-full rounded-md border px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* <label className="mt-4 block text-sm font-medium text-gray-700">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-400"
            /> */}
            <div>
              <label className="mt-4 block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={currentUserLocation}
                // onChange={handleChange}
                className="mt-1 w-full rounded-md border px-4 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <button className="login-button" type="submit">
                Update Detais
              </button>
            </div>
          </form>
        )}
        <div className="border-t-2 border-b-2 p-2">
          <p className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-5xl font-bold text-transparent">
            Poems
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
