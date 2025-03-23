import React from 'react';
import MyModal from './Modal';
import AddTaskForm from './AddTaskForm';

const AddTaskModal = ({isOpen,setIsOpen,title}) => {
    return (
        <div>
            <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} >
                <AddTaskForm isOpen={isOpen} setIsOpen={setIsOpen} ></AddTaskForm>
            </MyModal>
        </div>
    );
};

export default AddTaskModal;