import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_USER_INFORMATION } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import { Button } from 'react-bootstrap'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ProfilePage = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [userData, setUserData] = useState('')
  // for saved button: disable
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  console.log('user data ', userData)
  // updating user input state
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    goal: "",
    height: "",
    weight: "",
    fullName: "",
    profilePicture: "",
  });
  const [addUserInformation] = useMutation(ADD_USER_INFORMATION, {
    refetchQueries: [{ query: QUERY_ME }]
  });
  // function for handling the input for the user to update data
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserInput((userInformation) => ({ ...userInformation, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUserInformation({
        variables: { userInput: userInput },
      });
      // Notification of saved
      toastifySuccess();
    } catch (error) {
      console.error("Error updating user information", error);
    }
  };
  // render the data for userData and userInput
  useEffect(() => {
    if (!loading && data && data.user) {
      setUserData(data.user);
      setUserInput({
        username: data.user.username,
        email: data.user.email,
        goal: data.user.goal,
        height: data.user.height,
        weight: data.user.weight,
        fullName: data.user.fullName,
        profilePicture: data.user.profilePicture
      });
    }
  }, [loading, data])

  // when user saves the information given, a notification pops up that it is saved
  const toastifySuccess = () => {
    toast.success('Information Saved!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: false,
      closeOnClick: true,
    });
  };



  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5 vh-100">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={userInput?.profilePicture || "https://cdn.icon-icons.com/icons2/1863/PNG/512/fitness-center_119129.png"}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Hello, {userData?.username}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        name="fullName"
                        value={userInput?.fullName}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Email */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        name="email"
                        value={userInput?.email}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Goal */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Goal</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        name="goal"
                        value={userInput?.goal}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Height */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Height</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        name="height"
                        value={userInput?.height}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Weight */}
                  <MDBRow className="mb-3">
                    <MDBCol sm="3">
                      <MDBCardText>Weight</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        name="weight"
                        value={userInput?.weight}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <Button className='me-1' type="submit">
                    Save Changes
                  </Button>

                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer />
    </section>
  );
}

export default ProfilePage;
