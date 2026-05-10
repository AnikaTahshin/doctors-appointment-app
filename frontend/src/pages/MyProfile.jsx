import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Jhon Doe",
    image: assets.profile_pic,
    email: "jhon@gmail.com",
    phone: "1234567890",
    address: {
      line1: "123 Main St",
      line2: "Apt 4B",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt={userData.name} />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email Id: </p>
          <p> {userData.email}</p>
          <p>Phone</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, line1: e.target.value },
                })
              }
            />
          ) : (
            <p>{userData.address.line1}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
