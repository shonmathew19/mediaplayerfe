import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory,getAllVideosByID, updateCategory } from '../services/Allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';


function Category() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState()
    const [allCategory, setAllCateory] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddCategory = async () => {
        console.log(categoryName);
        if (!categoryName) {
            toast.error('Please enter category name')
        } else {
            let body = {
                categoryName: categoryName,
                allVideos: []
            }
            handleClose()
            const response = await addCategory(body)
            if (response.status === 201) {
                toast.success(`${categoryName} successfully inserted`)
                setCategoryName('')
                getCategory()
            } else {
                toast.error('something went wrong')
            }
        }

    }
    const getCategory = async () => {
        const response = await getAllCategory();
        const { data } = response
        console.log('category details');
        console.log(data);
        setAllCateory(data)
    }
    const handleDelete = async (categoryId) => {
        const result = await deleteCategory(categoryId)
        console.log('=====delete response====');
        console.log(result);
        if (result.status === 200) {
            toast.success('The item is deleted')
            getCategory()
        } else {
            toast.error('something went wrong')
        }

    }
    const videoDrop = async (e, id) => {
        console.log('========on drop=======');
        console.log('category id==', id);
        const videoid = e.dataTransfer.getData("videoID")
        console.log('video id=====',videoid);
        const {data} = await getAllVideosByID(videoid);
        console.log('======video details=====');
        console.log(data);
        const selectedCategory = allCategory?.find(item=>item.id === id);
        selectedCategory.allVideos.push(data)
        console.log('=====selected category====');
        console.log(selectedCategory);
        const response = await updateCategory(selectedCategory,id)
        getCategory()
        

    }
    const dragOver = (e) => {
        e.preventDefault()
        console.log('====prevnt=====default');

    }
    useEffect(() => {
        getCategory()
    }, [])


    return (
        <>
            <button className='btn btn-warning' onClick={handleShow}>Add new category</button>
            {
                allCategory?.length > 0 ?
                    allCategory.map((item) => (
                        <div className='m-3 border border-secondary rounded p-3'
                            droppable onDragOver={(e) => dragOver(e)}
                            onDrop={(e) => videoDrop(e, item.id)}>

                            <div className='d-flex justify-content-between'>
                                <h6 className='me-5'>{item.categoryName}</h6>
                                <Button variant="danger" onClick={() => handleDelete(item.id)}  ><i class="fa-solid fa-trash" ></i></Button>
                            </div>
                            {
                                item?.allVideos?.length>0?
                                item.allVideos?.map(card=>(
                                    <VideoCard displayVideo={card}/>
                                ))
                                :<p>Nothing to display</p>
                            }
                        </div>
                    ))
                    : (
                        <p>No categories available.</p>
                    )
            }

            <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
                <Modal.Header closeButton>
                    <Modal.Title ><i class="fa-solid fa-list text-warning me-3"></i><span className='textStyle'>Add category</span></Modal.Title>
                </Modal.Header>

                <Modal.Body data-bs-theme='light'>
                    <p className='textStyle' style={{ fontWeight: 'bolder' }}>Please fill the form</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter category name" onChange={(e) => setCategoryName(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="outline-danger" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" onClick={handleAddCategory}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoClose={2000} theme='colored'></ToastContainer>
        </>
    )
}

export default Category