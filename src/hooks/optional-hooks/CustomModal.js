import React, {useState, useImperativeHandle} from 'react';
import { Button} from 'antd';
function CustomModal(props, ref) {
    const [count, setCount] = useState(0)
    useImperativeHandle(ref, ()=> ({
        increment
    }))

    function increment(){
        setCount(count+1)
    }
    return(
        <>
        {count}&nbsp;
        <Button onClick = {increment}>Child Click</Button>
        </>
        );
}

export default React.forwardRef(CustomModal)