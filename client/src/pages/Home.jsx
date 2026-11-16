import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsAction } from '../redux/actions/post';
import HomeCard from '../components/HomeCard';

const Home = () => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state.posts);

    console.log(posts, "posts");

    useEffect(() => {
        dispatch(getPostsAction());
    }, [dispatch]);

    return (
        <div className='flex items-center m-5 flex-wrap'>
            {
                posts.length > 0 && posts?.map((post, i) => (
                    <HomeCard key={i} post={post} />
                ))
            }
        </div>
    );
};

export default Home;