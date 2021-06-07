import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name == "taskName") {
            setTaskName(value)
        }
        else {
            setDescription(value)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    }, [])

    return (
        <Modal isOpen={modal} toggle={toggle}>

            <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
            <ModalBody>
                <form>
                    <div class="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={taskName}
                            onChange={handleChange}
                            name="taskName" />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            value={description}
                            onChange={handleChange}
                            name="description" >
                        </textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>

        </Modal>
    )
}

export default EditTask;
