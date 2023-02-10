'use strict';
class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "posts": [
                
                {
                    "title": "Title 1",
                    "description":"Description 1"
                },
                {
                    "title": "Title 2",
                    "description":"Description 2"
                }
            ]
        }

        this.render_posts = this.render_posts.bind(this);
    }

    render() {
        return <ul>
            { this.render_posts() }
        </ul>;
    }

    render_posts() {
        const posts = this.state.posts.map((post) => {
      return       <li key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </li>
          
        
    })
        
        return posts
    }


}
export default Post;