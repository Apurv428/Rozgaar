import React,{useState} from "react";
import {
  Box,
  Button,
  Select,
  MenuItem,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#fff",
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: " 5px",
    "& > *": {
      flex: 1,
      height: "45px",
      margin: "8px",
    },
  },
});

const SearchBar=(props) => {
  const [loading, setLoading] = useState(false);
  const [jobSearch, setJobSearch] = useState({
    type: "Full time",
    location: "Remote",
  });

  const handleChange = (e) => {
    e.persist();
    setJobSearch((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(jobSearch);

  const search = async () => {
    setLoading(true);
    await props.fetchJobsCustom(jobSearch);
    setLoading(false);
  };

  const classes = useStyles();
  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
      <Select
        onChange={handleChange}
        value={jobSearch.type}
        name="type"
        variant="filled"
        disableUnderline
      >
        <MenuItem value="Full time">Full Time</MenuItem>
        <MenuItem value="Part time">Part Time</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Select
        onChange={handleChange}
        value={jobSearch.location}
        name="location"
        variant="filled"
        disableUnderline
      >
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="In-office">In-office</MenuItem>
        <MenuItem value="Contract">Contract</MenuItem>
      </Select>
      <Button
        disabled={loading}
        variant="contained"
        color="primary"
        disableElevation
        onClick={search}
      >
        {loading ? <h6>Loading...</h6> : " Search"}
      </Button>
    </Box>
  );
};

export default SearchBar;