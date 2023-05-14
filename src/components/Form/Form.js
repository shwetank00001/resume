import React from 'react'
import './Form.css'
const Form = () => {

    const [details, setDetails] = React.useState({
        fname: '',
        lname: '',
        comments: ''
    })

    function valueAdded(event){
        setDetails(function(item){
            return({
                ...item,
                [event.target.name]:event.target.value
            })
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(details)
    }




  return (
    <div className='form' data-aos="fade-up">
        <h3>Leave a good comment for my web page !</h3>
        <form  onSubmit={handleSubmit} className='form-tag'>
            <label htmlFor='fname'>Enter first name - </label><br/>
            <input  id='fname' type='text' placeholder='John' name='fname' value={details.fname} onChange={valueAdded}></input>

            <br/><br/>
            <label htmlFor='lname'>Enter last name - </label><br/>
            <input id='lname' type='text' placeholder='Wick' name='lname' value={details.lname} onChange={valueAdded}></input>
            <br/><br/>

            <textarea type='text' placeholder='Add your comments' name='comments' value={details.comments} onChange={valueAdded}></textarea> <br/><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form