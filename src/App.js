import ApplicantComponent from './components/ApplicantComponent'
import ApplicantDetail from './components/ApplicantDetail'
import React, { useState, useEffect } from "react"
import axios from 'axios'
import './styles/container.css'
import {Routes, Route} from "react-router-dom"


function App() {
  const [applicant, setApplicant] = useState();
  const [refreshToggle, setRefreshToggle] = useState(false)
  const [savedList, setSavedList] = useState([]);
    const getNewUser = async () => {
      const apiCall = await axios.get(
        "https://randomuser.me/api/"
      )
      let result = apiCall.data.results[0]
      setApplicant(result);
      console.log(applicant)
    }
    useEffect(getNewUser, [refreshToggle]);

    const addSavedList = (applicant) => {
      let newArr = []
      newArr.push(applicant);
      setSavedList([...savedList, ...newArr]);
      console.log(savedList)
      getNewUser();
    }
  return (
    <>
    <div className='main-container'>
      <div className='main-container-background'>
      </div>
      <div>
        {`${applicant?.name.title}`}
      </div>
      <ApplicantComponent 
          firstName={applicant?.name.first}
          lastName={applicant?.name.last}
          title={applicant?.name.title}
          image={applicant?.picture.large}
          age={applicant?.dob.age}
          applicant={applicant}
          getNewUser={getNewUser}
          addSavedList={addSavedList}
        />  
    </div>
    </>
  );
}

export default App;
