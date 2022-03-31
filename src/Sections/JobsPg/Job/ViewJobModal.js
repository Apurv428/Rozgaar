import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  info: {
    "& > *": {
      margin: "5px",
    },
  },
});

const ViewJobModal = (props) => {
  const classes = useStyles();
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.job.title} @ {props.job.companyName}
          <IconButton>
            <CloseIcon onClick={props.close} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Posted on:</Typography>
            <Typography variant="caption">
              {props.job.postedOn &&
                format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}
            </Typography>
          </Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Job type:</Typography>
            <Typography variant="caption">{props.job.type}</Typography>
          </Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Job location:</Typography>
            <Typography variant="caption">{props.job.location}</Typography>
          </Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Job description:</Typography>
            <Typography variant="caption">{props.job.description}</Typography>
          </Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Company name:</Typography>
            <Typography variant="caption">{props.job.companyName}</Typography>
          </Box>
          <Box display="flex" className={classes.info}>
            <Typography variant="body2">Company website:</Typography>
            <Typography variant="caption">{props.job.companyUrl}</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" component="a" href={props.job.link} target="_blank">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewJobModal;
