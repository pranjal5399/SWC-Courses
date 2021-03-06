import React, { useState, useEffect } from "react";
import AppNavbar from "./AppNavbar/AppNavbar";
import HomeScreen from "./HomeScreen/HomeScreen";
import styles from "./LandingPage.module.css";
import CardContainer from "./Cards/CardContainer";
import axios from "axios";
import ErrorBoundary from "../../hoc/ErrorBoundary";

const LandingPage = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "SWC-COURSES";
    // AJAX call to /api/courses to retrieve json data on courses
    async function fetchCourses() {
      try {
        let response = await axios("api/courses");
        setCourses(response.data.courses);
      } catch (error) {
        console.log("Error fetching the courses", error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.App}>
        <AppNavbar courses={courses} />
        <HomeScreen courses={courses} />
      </div>
      <ErrorBoundary>
        <CardContainer courses={courses} />
      </ErrorBoundary>
    </div>
  );
};

export default LandingPage;
