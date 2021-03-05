import React from 'react'
import Checkbox from './Checkbox'

const TaskList = (props) => {
  const {list, setList} = props;

  const onChangeStatus = e => {
    const {name, checked} = e.target;
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));

    setList(updateList)
  }

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  }

  const chk = list.map(item => (
      <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
  ));

  return (
    <div>
      {list.length ? chk: "No more tasks"}
      {list.length ? (
        <p>
          <button onClick={onClickRemoveItem}>
            Deleted tasks
          </button>
        </p>

        ): null}
    </div>

)}

export default TaskList