import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/Allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setuploadVideoStatus}) {
    const [show, setShow] = useState(false);

    const [videoDetails, setVideoDetails] = useState({
      
        caption: '',
        imageURL: '',
        youtubeLink: ''
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addVideoDetails = async () => {
        const { caption, imageURL, youtubeLink } = videoDetails;

        if (!caption || !imageURL || !youtubeLink) {
            toast.warning('Please fill the form completely')
            
        } else {
            console.log('Final data:');
            console.log(videoDetails);
            const response = await uploadVideo(videoDetails)
            console.log(response);
            if (response.status === 201) {
                setuploadVideoStatus(response.data)
                toast.success(`${response.data.caption} successsfully uploaded`)
                handleClose()
                setVideoDetails({
                    caption: '',
                    imageURL: '',
                    youtubeLink: ''
                })
            } else {
                toast.warning('something went wrong')
                
            }

        }
    };

    const getEmbeddedLink = (data) => {
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`;
        setVideoDetails({ ...videoDetails, youtubeLink: link });
    };

    return (
        <>
            <div className="d-flex align-items-center textStyle">
                <h5 className='me-2'>Upload a new video</h5>
                <button className='btn btn-primary' onClick={handleShow}>
                    <i className="fa-solid fa-cloud-arrow-up"></i>
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title>
                        <i className="fa-solid fa-film text-warning me-3"></i>
                        <span className='textStyle'>Upload video</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='bg-dark'>
                    <p className='textStyle' style={{ fontWeight: 'bolder' }}>Please fill the form</p>
                    <Form className='border border-secondary p-3 rounded' onSubmit={(e) => e.preventDefault()}>
                        {/* <Form.Group className="mb-3" controlId="formVideoId">
                            <Form.Control type="text" placeholder="Enter video ID" onChange={(e) => setVideoDetails({ ...videoDetails, videoId: e.target.value })} />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formVideoCaption">
                            <Form.Control type="text" placeholder="Enter video caption" onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formVideoImageUrl">
                            <Form.Control type="text" placeholder="Enter video image URL" onChange={(e) => setVideoDetails({ ...videoDetails, imageURL: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formYoutubeLink">
                            <Form.Control type="text" placeholder="Enter YouTube video link" onChange={(e) => getEmbeddedLink(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addVideoDetails}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default Add;
