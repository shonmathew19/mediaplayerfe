import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/Allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function VideoCard({ displayVideo, setDeleteVideoStatus }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
        const today = new Date
        const timestamp = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(today)
        console.log(timestamp);
        const reqBody = {
            url: displayVideo.youtubeLink,
            caption: displayVideo.caption,
            timestamp: timestamp
        }

        await addToHistory(reqBody)
        setShow(true);

    }
    const deleteVideoItem = async (id) => {
        const response = await deleteVideo(displayVideo.id)
        console.log('response of delete');
        if (response.status === 200) {
            setDeleteVideoStatus(true)
            toast.success('successfully deleted the video')
        } else {
            toast.error('something went wrong')
        }

    }
    const dragStarted = (e, id) => {
        e.dataTransfer.setData("videoID", id)
    }
    return (
        <>
            <Card style={{ width: '18rem', margin: '20px' }} draggable onDragStart={(e) => dragStarted(e, displayVideo.id)}>
                <Card.Img variant="top" src={displayVideo.imageURL} style={{ height: '200px' }} onClick={handleShow} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{displayVideo.caption}</Card.Title>
                        <Button variant="primary" onClick={() => deleteVideoItem(displayVideo)} ><i class="fa-solid fa-trash" ></i></Button>
                    </div>

                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="450" height="250" src={displayVideo.youtubeLink} title="Ennile Punchiri Video Song | Phoenix | Sam C.S | K.S. Chithra | Kapil Kapilan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default VideoCard