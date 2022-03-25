import React, {Component} from 'react';
import classes from './Result.module.css';

import { Table } from 'react-bootstrap';


class Result extends Component {
    render() {
		const arrData = this.props.table
		console.log(arrData)
		
		const renderTable = (data, index) => {
			
			let gradeData = data.grade;
			if (gradeData === '5') {
				gradeData = 'A';
			}
			
			if (gradeData === '4') {
				gradeData = 'B';
			}
			
			if (gradeData === '3') {
				gradeData = 'C';
			}
			
			if (gradeData === '2') {
				gradeData = 'D';
			}
			
			if (gradeData === '0') {
				gradeData = 'F';
			}
			
			
		
			return(
			
				<tr key={index}>
					<td>{data.course}</td>
					<td>{data.unit}</td>
					<td>{gradeData}</td>
				</tr>	
			)
		}

		
        return (
            <div className={classes.Result} striped bordered hover>
                <p><strong>Your GPA: {this.props.score}</strong></p>
				
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Course</th>
							<th>Unit</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						{arrData.map(renderTable)}
					</tbody>
				</Table>
				
                <p>Continue to Print?</p>
                
            </div>
        );
    }
    
 
};
    
    


export default Result;