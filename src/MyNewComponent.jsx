import React, { useState, useEffect } from 'react';

const MyNewComponent = () => {
    const [isClicked, setClicked] = useState(null);
    useEffect(()=>{ 
        if(isClicked){
            return  <html><h1>swdfrgthjukijhgf</h1></html>;
        }
    },[])
    return <html><h1>swdfrgthjukijhgf</h1></html>
};

export default MyNewComponent;