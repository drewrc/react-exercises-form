import logo from './logo.svg';
import './App.css';
import BlogForm from './maincomponents/BlogForm.js';
 //syntax -> we import inside html by <BlogForm />
 //example of named function export { BlogForm } - can have as many as you want
 //can only have 1 export default 
 import { useState } from 'react';
 import ContactList from './maincomponents/ContactList.js';

function App() {

  const [blogs, setBlogs] = useState([])
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (


   

<BlogForm addBlog={addBlog} />

    

  );
}

export default App;
