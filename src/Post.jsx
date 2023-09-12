import './Post.css'
export default function Post({post})
{
    const {title, userId, id} = post;
    console.log(post)
    return (
        <div className="box">
            <h3>Title : {title}</h3>
            <p><small>UserId : {userId}</small></p>
            <p><small>postId : {id}</small></p>
        </div>
    )
}