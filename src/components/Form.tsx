import './formStyles.css'

const form = () => {
  return (
    <div className='form'>
      <form> 
        <label>your name</label>
        <input type='text' />
        <label>Email </label>
        <input type='email' /> 
        <label>subject</label>
        <input type='text' /> 
        <label>Details</label>
        <textarea rows={5} placeholder='Type a short massage here' />
        <button className='btn'>submit</button> 
        </form>
      </div>
      
  )
}

export default form