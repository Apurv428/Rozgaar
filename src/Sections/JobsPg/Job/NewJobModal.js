import React, { useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  InputLabel
} from "@material-ui/core";

import { Close as CloseIcon } from "@material-ui/icons";

const initialState = {
  title: "",
  type: "",
  companyName: "",
  companyUrl: "",
  link: "",
  location: "",
  description: "",
};
const NewJobModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState(initialState);

  const handleChange = (e) => {
    e.persist();
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    for (const field in jobDetails) {
      if (typeof jobDetails[field] === "string" && !jobDetails[field]) {
        return console.log("not validated");
      }
    }

    setLoading(true);
    await props.postJob(jobDetails);
    closeModal();
  };

  // console.log(jobDetails);

  const closeModal = () => {
    setJobDetails(initialState);
    setLoading(false);
    props.closeJobModal();
  };

  return (
    <Dialog open={props.newJobModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post a Job
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              autoComplete="off"
              name="title"
              value={jobDetails.title}
              placeholder="Job title"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
          <InputLabel id="demo-simple-select-label" style={{fontSize:"12px"}}>Job type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
              onChange={handleChange}
              value={jobDetails.type}
              name="type"
              label="Job type"
              fullWidth
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              autoComplete="off"
              name="companyName"
              value={jobDetails.companyName}
              placeholder="Company name"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              autoComplete="off"
              name="companyUrl"
              value={jobDetails.companyUrl}
              placeholder="Company URL"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
          <InputLabel id="demo-simple-select-label1" style={{fontSize:"12px"}}>Job location</InputLabel>
            <Select
              onChange={handleChange}
              value={jobDetails.location}
              name="location"
              fullWidth
              labelId="demo-simple-select-label1"
              label="Job location"
              
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              onChange={handleChange}
              autoComplete="off"
              name="link"
              value={jobDetails.link}
              placeholder="Job Link"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              onChange={handleChange}
              autoComplete="off"
              name="description"
              value={jobDetails.description}
              placeholder="Job Description"
              disableUnderline
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Box
          color="red"
          width="100%"
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant="caption">*Required Fields</Typography>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            Post a job
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default NewJobModal;
