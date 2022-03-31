import React, { useEffect, useState } from "react";
import { Box, ThemeProvider, Grid, CircularProgress,Button } from "@material-ui/core";
import theme from "../../theme/theme";
import Header from "./Header/index";
import SearchBar from "./SearchBar/index";
import JobCard from "./Job/JobCard";
import NewJobModal from "./Job/NewJobModal";
import { db } from "../../firebase/config";
import ViewJobModal from "./Job/ViewJobModal";
import { Close as CloseIcon } from "@material-ui/icons";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "@firebase/firestore";
import Navbar from "../../components/Navbar";

const Jobs= () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [viewJob, setViewJob] = useState({});
  const jobCollectionRef = collection(db, "jobs");

  const fetchJobs = async () => {
    setCustomSearch(false);
    setLoading(true);
    const data = await getDocs(
      query(jobCollectionRef, orderBy("postedOn", "desc"))
    );
    //   data.docs.map(job=>console.log(job.data()));
    const jobData = data.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn.toDate(),
    }));
    console.log(jobData);
    setJobs(jobData);
    setLoading(false);
  };

  const postJob = async (jobDetails) => {
    await addDoc(jobCollectionRef, {
      ...jobDetails,
      postedOn: serverTimestamp(),
    });
    fetchJobs();
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoading(true);
    setCustomSearch(true);
    const q = query(
      collection(db, "jobs"),
      where("type", "==", jobSearch.type),
      where("location", "==", jobSearch.location)
    );
    const data = await getDocs(q);
    const jobData = data.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      postedOn: job.data().postedOn,
    }));
    console.log(jobData);
    setJobs(jobData);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Box bgcolor="black">
      <Header openJobModal={() => setNewJobModal(true)} />
      <NewJobModal
        closeJobModal={() => setNewJobModal(false)}
        postJob={postJob}
        newJobModal={newJobModal}
      />
      <ViewJobModal job={viewJob} close={() => setViewJob({})} />
      <Box mb={3} bgcolor="black">
        <Grid container justify="center">
          <Grid item xs={10}>
            <SearchBar fetchJobsCustom={fetchJobsCustom} />
            {/* {jobData.map(job => <JobCard key={job.id} {...job}/>)} */}
            {loading ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {customSearch && (
                  <Box display="flex" justifyContent="flex-end">
                    <Button onClick={fetchJobs}>
                      <CloseIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} open={() => setViewJob(job)} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
      </Box>
    </ThemeProvider>
    </>
  );
};
export default Jobs;
