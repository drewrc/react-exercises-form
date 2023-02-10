//import necessary components
import { useState } from "react";



//set up components FIRST
const BlogForm = ( {addBlog} ) => {
//4th SET STATE
const [title, setTitle] = useState ("");
const [body, setBody] = useState ("");


//set blogs to equal an empty array
const [blogs, setBlogs] = useState([])

//this allows us to save an array with title and body as new "blogs"
const handleSubmit = (e) => {
    //prevent saving
    e.preventDefault();
   // setBlogs([...blogs, { title, body }]);
    //make sure to add onSubmit={handleSubmit} to form element

const blog = {
    title, 
    body,
}

addBlog(blog)
setTitle("")
setBody("")
}
    // 2nd ->> what do we want our html to look like??? ->>
    //
return (
  
<form onSubmit={handleSubmit}>
<label htmlFor="text" 
className="form-label" 
id="title" 
placeholder="Enter title" value={title} 
>
Title
</label>
  <input
    type="text" className="form-control" id="title"
    onChange = {(e) => setTitle(e.target.value)}
  />
  <label htmlFor="text" className="form-label" id="body">
    Body

</label>
  <input
    type="text" className="form-control" id="body"
    onChange = {(e) => setBody(e.target.value)}
    />

    <button type="submit" className="btn btn-primary">
        Submit</button>
    </form>



)
}
export default BlogForm;