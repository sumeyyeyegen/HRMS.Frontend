import React from 'react'

function KodlamaIoDropdown({ label, id, handleChange, value, states, errors, touched, description }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="w-25">{description}</label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        <option value={0} label={label} />
        {
          states && states.map(state => <option value={state.id} label={state.name || state.title} key={state.id} />)
        }
        {errors.id && touched.id && (
          <div className="input-feedback">{errors.id}</div>
        )}
      </select>
    </div>
  )
}

export default KodlamaIoDropdown
