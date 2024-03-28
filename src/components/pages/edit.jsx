import Text from "../text";
import React, {useState, createRef} from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {exportComponentAsJPEG} from 'react-component-export-image'

const EditPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const url = searchParams.get('url');

    const [count, setCount] = useState(0);
    const memeRef = createRef();

    const AddText = () => {
        setCount(count + 1)
    }
    return (
    <div>
        <div ref={memeRef} className="meme mt-5 mb-5">
            <img src={url} alt="Meme" width={"200px"}/>
            {
                Array(count).fill(0).map(e => <Text />)
            }
        </div>
        
        <Button onClick={AddText} >Add Text</Button>
        <Button variant="success" onClick={e => exportComponentAsJPEG(memeRef)} >Save</Button>
    </div>
    );
};

export default EditPage;
