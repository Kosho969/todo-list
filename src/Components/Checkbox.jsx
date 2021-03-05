import React, {Fragment} from 'react'

const CheckBox = (props) => {
  const {
    onChange,
    data: {id, description, done}
  } = props;

  return (
    <Fragment>
    <label>
      <input 
        type="checkbox"
        name={id}
        defaultChecked={done}
        onChange={onChange}
      />
      <div> {description}</div>
    </label>
    </Fragment>
  )
}

export default CheckBox