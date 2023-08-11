import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Form } from "react-bootstrap";

const LabTabs = () => {
  const [value, setValue] = useState("1");
  const [s3Key, setS3Key] = useState("********************");
  const [s3Secret, setS3Secret] = useState("********************");
  const [s3Region, setS3Region] = useState("********************");
  const [s3Bucket, setS3Bucket] = useState("********************");
  const [s3URL, setS3URL] = useState("********************");
  const [s3Endpoint, setS3Endpoint] = useState("********************");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box className="ps-4" sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Local" value="1"/>
            <Tab label="AWS S3" value="2" />
            <Tab label="Wasabi" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <Form className="mx-4 form-input-width">
              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>S3 Key</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Key}
                    onChange={(e) => setS3Key(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>S3 Secret</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Secret}
                    onChange={(e) => setS3Secret(e.target.value)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <Form className="mx-4 form-input-width">
              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>S3 Key</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Key}
                    onChange={(e) => setS3Key(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>S3 Secret</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Secret}
                    onChange={(e) => setS3Secret(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>S3 Region</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Region}
                    onChange={(e) => setS3Region(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>S3 Bucket</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Bucket}
                    onChange={(e) => setS3Bucket(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>S3 URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3URL}
                    onChange={(e) => setS3URL(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>S3 Endpoint</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Endpoint}
                    onChange={(e) => setS3Endpoint(e.target.value)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div>
            <Form className="mx-4 form-input-width">
              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>Wasabi Key</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Key}
                    onChange={(e) => setS3Key(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>Wasabi Secret</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Secret}
                    onChange={(e) => setS3Secret(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>Wasabi Region</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Region}
                    onChange={(e) => setS3Region(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>Wasabi Bucket</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Bucket}
                    onChange={(e) => setS3Bucket(e.target.value)}
                  />
                </div>
              </div>

              <div className="d-flex">
                <div className="mb-3 w-50 me-2">
                  <Form.Label>Wasabi URL</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3URL}
                    onChange={(e) => setS3URL(e.target.value)}
                  />
                </div>

                <div className="mb-3 w-50 ms-2">
                  <Form.Label>Wasabi Endpoint</Form.Label>
                  <Form.Control
                    type="text"
                    value={s3Endpoint}
                    onChange={(e) => setS3Endpoint(e.target.value)}
                  />
                </div>
              </div>
            </Form>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LabTabs;
