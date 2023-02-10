import { useState } from "react";

const INITIAL_DATA = [
    {
        url: 'https://www.lol.com',
        title: 'The Input',
        tag: 'HTML',
    }
]

function BookmarkList() {
    const [bookmarks, setBookmarks] = useState(INITIAL_DATA);
    const [filter, setFilter] = useState("all")

    const tags = [...new Set(bookmarks.map((boomark) => bookmark.tag))];

    const tagsHTML = bookmarks.map((bookmark) => (
        <button key={tag} className="btn btn-link" type="button">{bookmark.tag}</button>
    ))

    return (
        <div>
    <header>
        <button onClick={() => setFilter('all')} className="btn btn-link" type="button">All</button>
    </header>
    </div>

    )
}
export default BookmarkList;