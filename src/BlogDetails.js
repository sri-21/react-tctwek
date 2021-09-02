import React from 'react';
import useParams from 'react-router-dom';
const BlogDetails = () => {
  const { id } = useParams;
  const { data, error, isPending } = useFetch('');
  return (
    <div className="blog-details">
      <h1>Details: {id}</h1>
    </div>
  );
};
export default BlogDetails;
