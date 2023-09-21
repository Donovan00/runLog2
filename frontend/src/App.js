import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage run data
  const [runs, setRuns] = useState([]);

  // Form input state
  const [formData, setFormData] = useState({
    miles: '',
    time: '',
    avgHeartRate: '',
    milepace: '',
    date: '',
    notes: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Create a new run object and add it to the runs array
    const newRun = {
      miles: parseFloat(formData.miles),
      time: formData.time,
      avgHeartRate: parseInt(formData.avgHeartRate),
      milepace: formData.milepace,
      date: formData.date,
      notes: formData.notes,
    };

    setRuns([...runs, newRun]);

    // Clear the form
    setFormData({
      miles: '',
      time: '',
      avgHeartRate: '',
      milepace: '',
      date: '',
      notes: '',
    });
  };

  return (
    <div className="App">
      <h1>Run Logger</h1>
      <div className="run-form">
        <form onSubmit={handleFormSubmit}>

          <input
            type="number"
            name="miles"
            placeholder="Miles"
            value={formData.miles}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="time"
            placeholder="Time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="avgHeartRate"
            placeholder="Avg Heart Rate"
            value={formData.avgHeartRate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="Mile Pace"
            placeholder="Mile Pace"
            value={formData.milepace}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
          <button type="submit">Add Run</button>
        </form>
      </div>
      <div className="run-table">
        <h2>Run Log</h2>
        <table>
          <thead>
            <tr>
              <th>Miles</th>
              <th>Time</th>
              <th>Avg Heart Rate</th>
              <th>Mile Pace</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run, index) => (
              <tr key={index}>
                <td>{run.miles}</td>
                <td>{run.time}</td>
                <td>{run.avgHeartRate}</td>
                <td>{run.milepace}</td>
                <td>{run.date}</td>
                <td>{run.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
