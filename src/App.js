import React, {useState} from 'react'
import './App.css';
import {numbers,upperCaseLetters, lowerCaseLetters, specialCharacters} from './characters.js'

function App() {
   const [password,setPassword] = useState('')
    const [passwordLength,setPasswordLength] = useState(20)
    const [includeUppercase,setIncludeUppercase] = useState(false)
    const [includeLowercase,setIncludeLowercase] = useState(false)
    const [includeNumbers,setIncludeNumbers] = useState(false)
    const [includeSymbols,setIncludeSymbols] = useState(false)

    const handleGeneratePassword = (e) => {
      let characterList = ''

      if(includeLowercase){
         characterList=characterList+lowerCaseLetters
      }
      if(includeUppercase){
         characterList=characterList+upperCaseLetters
      }
      if(includeNumbers){
         characterList=characterList+numbers
      }
      if(includeSymbols){
         characterList=characterList+ specialCharacters
      }

      setPassword(createPassword(characterList))
    }
    const createPassword = (characterList) => {
      let password = ''
      const characterListLength = characterList.length

      for(let i=0;i<passwordLength;i++){
         const characterIndex = Math.round(Math.random() * characterListLength)
         password=password + characterList.charAt(characterIndex)
      }
      return password
    }
    const copyToClipboard = () => {
      const newTextArea = document.createElement('textarea')
      newTextArea.innerText = password
      document.body.appendChild(newTextArea)
      newTextArea.select()
      document.execCommand('copy')
      newTextArea.remove()
    }
    const  handleCopyPasssword = (e) => {
      copyToClipboard()
    } 
  return <div className="App">exi
    <div className= "container">
      <div className="head">
    <h2 className="head">Password Generator</h2>
    </div>
    <div className="generator__header">
      <h2>{password}</h2>
      <button onClick={handleCopyPasssword}className="copy__btn">
        <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    <div className= "generator">
      <div className="form-group">
        <label htmlfor="password-strength">Character length</label>
        <input 
           defaultValue={passwordLength}
           onChange={(e) => setPassword(e.target.value)}
           type ="number" 
           id="password-strength" 
           name="password-strength" 
           max="20" 
           min="10"
        />
       </div>

       <div className="form-group">
        <label htmlfor="uppercase-letters">Include Uppercase Letters</label>
        <input 
           checked={includeUppercase}
           onChange={(e) =>setIncludeUppercase(e.target.checked)}
           type ="checkbox" 
           id="uppercase-letters" 
           name="uppercase-letters"
        />
       </div>

       <div className="form-group">
        <label htmlfor="lowercase-letters">Include Lowercase Letters</label>
        <input 
            checked={includeLowercase}
            onChange={(e) =>setIncludeLowercase(e.target.checked)}
           type ="checkbox" 
           id="lowercase-letters" 
           name="lowercase-letters"
        />
       </div>

       <div className="form-group">
        <label htmlfor="include-numbers">Include Numbers</label>
        <input 
           checked={includeNumbers}
           onChange={(e) =>setIncludeNumbers(e.target.checked)}
           type ="checkbox" 
           id="include-numbers" 
           name="include-numbers"
        />
       </div>

       <div className="form-group">
        <label htmlfor="include-symbols">Include Symbols</label>
        <input 
           checked={includeSymbols}
           onChange={(e) =>setIncludeSymbols(e.target.checked)}
           type ="checkbox" 
           id="include-symbols" 
           name="include-symbols"
        />
       </div>
       <div className="generator__password">
        <h3>Strength</h3>
      </div>
       <button onClick={handleGeneratePassword} className="generator__btn">GENERATE  -></button>
      </div>
    </div>
  </div>
}

export default App;
