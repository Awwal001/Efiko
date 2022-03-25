import React, { Component } from 'react';

import classes from './InputContent.module.css';
import Input from '../../components/UI/Input/Input';
import Result from '../../components/Results/Result/Result';
import { Dropdown,DropdownButton,Table } from 'react-bootstrap';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
class InputContent extends Component {
	constructor(props){
		super(props)
		this.state = {
			taskList: [{ index: Math.random(), 
						course: "", 
						unit: "",
						grade: ""},],
			totalGpa: "",
			arrTable:"",
			gradeType:"",
			paste:"",
			pastedCourses: []
			
		}
	}
  
    handleChange = (e) => {
		e.preventDefault();
        if (["course", "unit", "grade"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }
    addNewRow = () => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), course: "", unit: "", grade: ""}],
        }));
		
    }
    pasteResult = (e) => {
        e.preventDefault();
		let paste = this.state.paste
		
		paste = paste.split(/\s/);
		paste = paste.join(" ")

		const inputs =  paste.match(/[a-zA-Z]{3}\d{3}/g);
		
		this.setState({ pastedCourses: inputs })
		console.log(inputs)
		const loop = inputs.length - 1
		const inputFields = []
		if (inputs.length > 1) {
			for (let i = 0; i < loop; i++) {
				this.setState((prevState) => ({
					taskList: [...prevState.taskList, { index: Math.random(), course: "", unit: "", grade: ""}],
				}));
				console.log(this.state.taskList)  
				inputFields.push(this.state.taskList[0])
				
			} 
		
		
		}	
		let Fields = document.querySelectorAll('input[id*="course-"]');
		console.log(Fields)
    }
	
	


    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
		let data = { formData: this.state, userData: localStorage.getItem('user') }
		
		var cs = [];
		var un = [];
		var gd = [];

		Array.from(data.formData.taskList).forEach((c) => {
			cs.push(c.course)
	   })

	   Array.from(data.formData.taskList).forEach((u) => {
			un.push(u.unit)
	   })

	   Array.from(data.formData.taskList).forEach((g) => {
			gd.push(g.grade)
	   })

		var myArr = [];
		myArr.push(cs);
		myArr.push(un);
		myArr.push(gd); 
		console.log(data.formData.taskList)
		this.setState({ arrTable: data.formData.taskList})
		
		var new_un = un.map((i) => Number(i));
		var new_gd = gd.map((i) => Number(i));

		var sum_un = new_un.reduce(function(a, b){ return a + b;}, 0);

		var sum = 0;
		for (let i = 0; i < new_un.length; i++) {
			sum += new_un[i] * new_gd[i];
			  
		}
		let GPA = sum / sum_un
		
		const newGpa = GPA
		this.setState({totalGpa: newGpa, arrTable: data.formData.taskList})
		

    }
    clickOnDelete = (record) => {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    };
	
	TypeAHandler= () => {
		this.setState({gradeType: "TypeA"})
	}
	TypeBHandler= () => {
		this.setState({gradeType: "TypeB"})
	}
	
	
    render = () => {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
		let totalGp = null;
		if ( !Number.isNaN(this.state.totalGpa) && this.state.totalGpa !== ""){
			totalGp = (<Result score={this.state.totalGpa} table={this.state.arrTable}/>)};
        return (
			<React.Fragment  >
				<DropdownButton id="dropdown-basic-button" title="Select type"  style={{ textAlign: 'center'}}>
				  <Dropdown.Item onClick={this.TypeAHandler}>A-B-C-D-F</Dropdown.Item>
				  <Dropdown.Item onClick={this.TypeBHandler}>A-B-C-D-E-F</Dropdown.Item>
				</DropdownButton>
				<div style={{ textAlign: 'center', marginTop: 8}}>
					<input type="text"  name="paste" id="paste"  onChange={this.handleChange} placeholder="Paste your copied result here!" />
					<button onClick={this.pasteResult} type="button"  >Paste</button>
				</div>
				<div className={classes.InputContent}>
					<form onSubmit={this.handleSubmit} onChange={this.handleChange} >
						<strong>Input your grades</strong>
							<Table size="sm">
								<thead>
									<tr>
										<th >Course</th>
										<th >Unit</th>    
										<th>Grades</th>
									</tr>
								</thead>
								<tbody>
									<Input add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} gradetype={this.state.gradeType} pastedCourses={this.state.pastedCourses}/>
								</tbody>
								<tfoot>
									<tr><td style={{textAlign: 'left'}} colSpan="2">
											<button onClick={this.addNewRow} type="button" style={{ textAlign: 'left'}} >+ Courses</button></td>
										<td style={{textAlign: 'right'}} colSpan="2">
											<button onClick={this.addNewRow} type="button" style={{ textAlign: 'center'}} >Settings</button>
									</td></tr>
								</tfoot>
							</Table>
						<div > <button type="submit" style={{ color: 'white', backgroundColor: '#703B09', padding: 8}}>C a l c u l a t e</button></div>
					</form>
				</div>
				{totalGp}
			</React.Fragment>
        );
    }
}
	
export default InputContent;