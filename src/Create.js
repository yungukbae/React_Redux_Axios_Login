import { useState } from "react";
import {useHistory} from 'react-router-dom';


const Create = () => {

    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();
        const blog = {title,body,author};
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new post added');
            setisPending(false);
            //history.go(1);
            history.push('/')
        })

        
    }

    return( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label type="text">
                    Blog title:
                </label>
                <input type="text" required value={title} onChange={(e) => settitle(e.target.value)}></input>
                <label type="text">Blog Body:</label>
                    <textarea required type="text" value={body} onChange={(e) => setbody(e.target.value)}></textarea>
                    <label>Blog Author:</label>
                    <select 
                    value={author}
                    onChange={(e) => setauthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    { !isPending && <button>submit</button> }
                    { isPending && <button disabled>submit...</button> }
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;