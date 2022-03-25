import React, { useState } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/store/home/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
		
			<Form.Row className="align-items-center">
				<Col sm={8} className="my-1">
					<Form.Control
						type='text'
						name='q'
						onChange={(e) => setKeyword(e.target.value)}
						className='mr-sm-2 ml-sm-5'
					></Form.Control>
				</Col>
				<Col xs="auto" className="my-">
					<Button
						type='submit'
						className='pl-3 mr-1'
						variant='outline-danger'
						
					>
						Submit
					</Button>
				</Col>
			</Form.Row>
        </Form>
    )
}

export default SearchBox
