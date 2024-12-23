import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: "20px",

  p: 4,
};

const UploadForm = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
    >
      <Box sx={modalStyle}>
        <button
          className="modal-close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 15,
            right: 15,
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <div className="modal-body">
          {/* Image Upload Section */}
          <div
            className="image-upload"
            style={{
              background: "#ffe6cc",
              border: "2px solid #ff733b",
              borderRadius: "10px",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
            }}
          >
            <div className="image-upload-icon" style={{ textAlign: "center" }}>
              <img
                src="/image-upload-icon.svg"
                alt="Upload Icon"
                style={{ width: "50px", height: "50px" }}
              />
              <p
                style={{
                  color: "#ff733b",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Image Upload
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div
            className="form-section"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
              marginLeft: "20px",
            }}
          >
            <TextField label="Item Code" variant="outlined" fullWidth />

            <TextField
              label="Category"
              select
              variant="outlined"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </TextField>

            <TextField
              label="Style"
              select
              variant="outlined"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Style 1">Style 1</MenuItem>
              <MenuItem value="Style 2">Style 2</MenuItem>
            </TextField>

            <TextField
              label="Year"
              select
              variant="outlined"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
            </TextField>

            <TextField
              label="Season"
              select
              variant="outlined"
              fullWidth
              defaultValue=""
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Winter">Winter</MenuItem>
              <MenuItem value="Summer">Summer</MenuItem>
            </TextField>

            <TextField
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
            />

            <div className="color-group">
              <label
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "5px",
                }}
              >
                Color
              </label>
              <div
                className="color-options"
                style={{ display: "flex", gap: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "orange",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "black",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "blue",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                  }}
                ></div>
              </div>
            </div>

            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#ff733b",
                color: "#fff",
                borderRadius: "30px",
                padding: "10px 20px",
                marginTop: "10px",
              }}
              onClick={onClose}
            >
              Upload
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default UploadForm;
