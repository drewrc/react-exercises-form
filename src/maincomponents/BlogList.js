//blog reading App 
import { useState } from "react"

const INITIAL_DATA = [
    {
        id: 1;
        title: "post 1",
        body: "lorem ipsum ..."
        }

]

function BlogList () {
    const [blogs, setBlogs] = useState(INITIAL_DATA)
    const blogTitlesHTML = blogs.maps((blog) => <button><h2>{blog.title}</h2></button>)
    return 
    <div className="row">
        <aside className="col-md-3">I am blog list</aside></div>
}

