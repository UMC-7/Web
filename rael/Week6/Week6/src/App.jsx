import './App.css'

function typingInput() {
  const name = nameElem.value;
  console.log(`입력된 이름: ${name}`)
}

function App() {
  const nameElem = document.getElementById('inputName')

  nameElem.addEventListener("input", typingInput)

  return (
    <>
      <h1>Debounce</h1>
      <input type='text'/>
    </>
  )
}

export default App
