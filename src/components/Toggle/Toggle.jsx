import "./Toggle.scss"
import Form from "react-bootstrap/Form"
import { useEffect, useState } from "react"

export const Toggle = ({ name, label, change }) => {
  
  const [value, setValue] = useState(false)

  useEffect(() => {
    let browserOptions = JSON.parse(localStorage.getItem("options")) || {
      lang: false,
      spicy: false,
      drinks: false,
    }
    if (browserOptions[name]) {
      setValue(browserOptions[name])
    }
  }, [])
  const handleChange = () => {
    setValue((prev) => !prev)
    change()
  }
  return (
    <>
      <Form.Check
        type="switch"
        id={name}
        checked={value}
        onChange={() => handleChange()}
        label={label}
      />
    </>
  )
}
