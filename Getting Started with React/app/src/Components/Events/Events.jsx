import { useState } from "react"


export default function Events({people, setPeople}) {
    /*
    1. I need 3 fields
        name field
        message field
        sender field
    2. button to do the submits
    3. Gather the values from the fields
    4. Pass those gathered values into our setPeople and create a new person

    */

    const [person, setPerson] = useState({name: '', message: '', sender: ''})

    function handleSubmit(event) {
        event.preventDefault()
        setPeople([...people, person])
        setPerson({name: '', message: '', sender: ''})   
    }

    function handleChange(event) {
        console.log(event)
        const {name, value} = event.target
        setPerson({...person, [name]: value})
    }
  return (
    <>
    <form onSubmit={(event) => handleSubmit(event)} >
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={person.name} name="name" onChange={handleChange}/>

        <label htmlFor="message">Message:</label>
        <input id="message" name="message" type="text" value={person.message} onChange={handleChange}/>

        <label htmlFor="sender">Sender:</label>
        <input id="sender" name="sender" type="text" value={person.sender} onChange={handleChange} />

        <button onClick={()=>alert("Thank you for your card submission!")} >Submit</button>

    </form>
    
    </>
  )
}
