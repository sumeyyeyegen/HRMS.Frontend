import React from 'react'

function KodlamaIoDropdown({ onChange, value, states, label, name, ...props }) {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={onChange} className="form-select" value={value} {...props}>
        <option value="0">{label} Seç..</option>
        {states.length && states.map(s => {
          return <option key={s.id} value={s.id}> {s.title || s.name} </option>
        })}
      </select>
      {/* {meta.touched && meta.error ? (
        <span className="custom-input-error">{meta.error.value}</span>
      ) : null} */}
    </div>
  )
}

export default KodlamaIoDropdown
