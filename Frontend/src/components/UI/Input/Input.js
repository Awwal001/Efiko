import React, {useRef} from "react"
import classes from './Input.module.css';

const Input = (props) => {
  const gradetype = props.gradetype
  const inputRef = useRef();
  
  console.log(gradetype)
  let select = (<React.Fragment>
				  <option value="o">-</option>
				  <option value="5">A</option>
				  <option value="4">B</option>
				  <option value="3">C</option>
				  <option value="2">D</option>
				  <option value="0">F</option>
				</React.Fragment>)
  
  if ( gradetype === "TypeA") {
	  select = (<React.Fragment>
				  <option value="o">-</option>
				  <option value="5">A</option>
				  <option value="4">B</option>
				  <option value="3">C</option>
				  <option value="2">D</option>
				  <option value="0">F</option>
				</React.Fragment>)
  }
  
  if ( gradetype === "TypeB") {
	  select = (<React.Fragment>
				  <option value="o">-</option>
				  <option value="5">A</option>
				  <option value="4">B</option>
				  <option value="3">C</option>
				  <option value="2">D</option>
				  <option value="1">E</option>
				  <option value="0">F</option>
				</React.Fragment>)
  }
  
  
  return (
    props.taskList.map((val, idx) => {
      let course = `course-${idx}`, unit = `unit-${idx}`,  grade = `grade-${idx}`
	  
	    let inputFields = document.querySelectorAll('input[id*="course-"]');
		console.log(inputFields)
		console.log(inputRef.current)
		
	  
	
      return (
        <tr key={val.index}>
          <td>
            <input type="text" ref={inputRef} name="course" data-id={idx} id={course} className={classes.InputElement}   />
          </td>
          <td>
            <input type="number"  name="unit" id={unit} data-id={idx} className={classes.InputElement} />
          </td>
          
          <td>
			<select name="grade" id={grade} data-id={idx} className={classes.InputElement} >
		      {select}
			</select>  
          </td>
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" style={{ color: 'white', backgroundColor: 'green', borderRadius: 25 }}><strong>+</strong></button>
            : <button style={{ color: 'white', backgroundColor: 'darkred', borderRadius: 25 }} onClick={(() => props.delete(val))} ><strong>-</strong></button>
            }
          </td>        
		</tr >
      )
    })
  )
}
export default Input;