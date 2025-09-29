import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Maximillian" body="React is awesome!" />
                <Post author="Manuel" body="React is great!" />
            </ul>
        </>
    );
}

export default PostList;
