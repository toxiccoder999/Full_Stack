import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function GetMovie() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get("http://127.0.0.1:3000/movies");
                setData(response); 
                console.log(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []); 

    return (
        <>
          <h1>Movie Data</h1>

          <table border='1px'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Year</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
               
                   { data.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.Name}</td>
                            <td>{movie.Rating}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.Director}</td>
                        </tr>
                    )
               
                )}
            </tbody>
          </table>
        </>
    );
}
