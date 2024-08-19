import { Box, Button, Modal, Typography } from "@mui/material";

import { DeleteModalProps } from "./types";
import { modalStyle } from "./consts";

export function DeleteModal({ isOpen, onConfirm, onClose }: DeleteModalProps) {
  function handleConfirm() {
    onConfirm();
    onClose();
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Do you want to delete de movie?
        </Typography>
        <Box sx={{ marginTop: "12px" }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </Box>
      </Box>
    </Modal>
  );
}
