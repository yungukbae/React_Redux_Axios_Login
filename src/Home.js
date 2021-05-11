import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const { data, isPending, error} = useFetch('http://localhost:8000/blogs')

        // const handleDelete = (id) => {
        //     const newBlogs = data.filter(data => data.id !== id)
        //     setdata(newBlogs)
        // }

        


    return (
        <div className="Home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="my blog"/> }
            {/* {data && <BlogList blogs={data} title="my blog" handleDelete={handleDelete}/> } */}
        </div>
    )
}
export default Home;