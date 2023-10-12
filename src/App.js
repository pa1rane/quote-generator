import React, {useState, useEffect } from 'react'

const App = () => {

  const [category, setCategory] = useState("")
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputVal, setInputVal] = useState("")

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
    fetch(url,{
      headers: {
        'X-Api-Key' : "cllL6trlSi7gAW1tXu8mYB3ISBACbdMabF723S3i",
      },
    }).then((res) => res.json())
      .then((data)=> {
       setQuote(data)
       setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [category])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      )
      :
      (
      <div>
     {quote.map((item, index) => (
        <div key={index}>
          <h3>{item.quote}</h3>
          <p>{item.author}</p>
           </div>
      ))}
      <p><strong>tags: </strong><input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/></p>
      <button onClick={() =>setCategory(inputVal)}>Generate</button>
      </div>
      )
     }</div>
  )
}

export default App;
