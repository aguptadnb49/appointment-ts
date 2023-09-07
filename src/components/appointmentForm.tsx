// src/components/AppointmentForm.js

import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Paper, Typography } from '@mui/material';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add logic to submit the form data (e.g., send it to an API).
    console.log(formData);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h3" component="h2">
            Create Appointment
        </Typography>
        <br /><br />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date"
                type="date"
                name="date"
                fullWidth
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Time"
                type="time"
                name="time"
                fullWidth
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Create Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AppointmentForm;
