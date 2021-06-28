
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState('')

  useEffect(() => {
    fetchGames() // Fetch games when component is mounted
  }, [])

  const fetchGames = () => {
    fetch('http://localhost:3000/game', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const saveGames = () => {
    fetch('http://localhost:3000/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData, // Use your own property name / key
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveGames() // Save games when form is submitted
  }

  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  return (
    <div className="App">
      {/* method="post" not needed here because `fetch` is doing the POST not the `form` */}
      {/* Also, note I changed the function name, handleSubmit */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData} onChange={handleChange} />
        <button type="submit">click</button>
      </form>

      {data &&
        data.map((element, index) => (
          <GameTestResult name={element.name} key={element.index} />
        ))}
    </div>
  )
}

 //* /FETCH API
 function PostRequestHooks() {
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        //fetch('http://localhost:8888/Fetch/placements.json', requestOptions)
        fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json', requestOptions)
            .then(response => response.json())
            .then(data => setBarcode(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

 /*   return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {barcode}
            </div>  
        </div>
    );  *