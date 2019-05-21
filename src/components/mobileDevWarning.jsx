import isMobile from "../utils/deviceDetector";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

const DeviceWarning = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isMobile.any()) {
      setOpen(true);
      return;
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"We've detected you're on a mobile device!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This site is not optimized for mobile usage and you may be running
              into some issues! If possible reopen this site on a non-mobile
              device or a bigger device. Yikes!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleClose}>
              I understand
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    return <div />;
  }
};

DeviceWarning.propTypes = {
  fullScreen: PropTypes.bool
};

export default withMobileDialog()(DeviceWarning);
