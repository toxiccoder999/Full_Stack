import React, { useState } from 'react';
import axios from 'axios';

export default function PostMovie() {
  const [moviename, setmoviename] = useState('');
  const [Rating, setRating] = useState('');
  const [Year, setYear] = useState('');
  const [Director, setDirector] = useState('');

  const sendData = async (e) => {
    e.preventDefault();
  
    if (!moviename || !Rating || !Year || !Director) {
      alert('All fields are required!');
      return;
    }
  
    if (Rating < 0 || Rating > 10) {
      alert('Rating must be between 0 and 10!');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/getMovies', {
        Name: moviename,  // Use 'Name' to match schema
        Rating,
        Year,
        Director,
      });
      console.log('Response from server:', response.data);
      alert('Movie uploaded successfully!');
    } catch (error) {
      console.error('Error uploading movie:', error.response || error.message);
      alert(
        `Failed to upload the movie. Server says: ${
          error.response?.data?.message || 'Unknown error'
        }`
      );
    }
  };
  
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <form onSubmit={sendData}>
        <h1>Movie Hub</h1>
        <input
          type='text'
          value={moviename}
          onChange={(e) => setmoviename(e.target.value)}
          placeholder='Enter Movie Name'
        /><br />
        <input
          type='number'
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder='Enter Movie Rating'
        /><br />
        <input
          type='number'
          value={Year}
          onChange={(e) => setYear(e.target.value)}
          placeholder='Enter Movie Year'
        /><br />
        <input
          type='text'
          value={Director}
          onChange={(e) => setDirector(e.target.value)}
          placeholder='Enter Movie Director'
        /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
