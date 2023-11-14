import { useState } from "react";

function Message()
{
    const [showmsg,setmsg] = useState(false);

    function ToogleMessage()
    {
        setmsg(!showmsg);
    }
    return(
        <div>
        <button onClick={ToogleMessage}>
            {showmsg ? 'HideMessage' : 'ShowMessage'}
        </button>
        {showmsg && <p>Hi Welcome All</p>}
        </div>
    )
}
export default Message;
