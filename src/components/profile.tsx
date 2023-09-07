import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  console.log({user})

//   const d=JSON.parse(localStorage.getItem('@@auth0spajs@@::EqzdIBO4iW6I2O9Wf1owFzvbBIV7jJhI::@@user@@'))
//   const token =d.decodedToken.claims.__raw;



  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-lzpdqmdb2yfnmavu.us.auth0.com";
      const apiDomain = "https://www.epam-api.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `${apiDomain}`,
            scope: "read:current_user read:appointments",
          },
        });
        console.log({accessToken})
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        // const userDetailsByIdUrl = `https://${apiDomain}/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log({metadataResponse})
  
        const { user_metadata } = await metadataResponse.json();
        console.log({user_metadata})
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log({e})
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  let navigate = useNavigate(); 
  const routeChange = (route) =>{ 
    // let path = `newPath`; 
    navigate(route);
  }

  return (
    isAuthenticated ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )} */}
        <button onClick={() => routeChange('/list')} >
            Go to Appointment List
        </button>
        <button onClick={() => routeChange('/new')} >
            Create Appointment
        </button>
      </div>
    ) : <></>
  );
};

export default Profile;