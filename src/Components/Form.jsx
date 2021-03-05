import React, {useState} from 'react'


const Form = props => {
  const {handleAddItem} = props;

  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    handleAddItem({
      done:false,
      id: (+new Date()).toString(),
      description
    });

    setDescription("");
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="text"
              className=""
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <button
              className=""
              disabled={description ? "" : "disabled"}
            >
              Add
            </button>

          </div>
        </div>
      </form>
    )
}

export default Form