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

// import for notification
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import StepCounter from '../components/StepCounter';
import WaterIntakeTracker from "../components/WaterIntakeTracker";
// import WorkoutStatistics from "../components/WorkoutStatistics";

const ProfilePage = () => {
  const { loading, data } = useQuery(QUERY_ME);
  // const userData = data?.user || {};
  console.log('data: ', data);

  const [userData, setUserData] = useState('')
  const [isDisabled, setAsDisabled] = useState(false);
  useEffect(() => {
    setUserData(data?.user)
  }, [data])

  console.log('user data ', userData)
  // updating user input state
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    goal: "",
    height: "",
    weight: "",
    fullName: "",
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
      // Disable the button for 1 second
      setTimeout(() => {
        setAsDisabled(false);
      }, 5000);
      await addUserInformation({
        variables: { userInput: userInput },
      });

      // Notification of saved
      toastifySuccess();
      setAsDisabled(true)
    } catch (error) {
      console.error("Error updating user information", error);
    }
  };

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
      toastId: "Saving User Infomration"
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
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
                  <Button className='me-1 mx-auto' type="submit" disabled={isDisabled}>
                    Save Changes
                  </Button>

                </form>
                <StepCounter />
                <WaterIntakeTracker />
                {/* <WorkoutStatistics /> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer />
    </section>
  );
}
// export
export default ProfilePage;