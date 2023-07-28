import TextInput from './TextInput'

const Home = () => {
  const handleInputValueChange = (value) => {
    console.log('Input Value:', value)
  }
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>This is a simple Next.js page.</p>

      <TextInput onInputChange={handleInputValueChange} />
    </div>
  )
}

export default Home
