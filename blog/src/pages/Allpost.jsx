import React, { use } from 'react'
import { Postcard, Container } from '../components/Index'
import appwriteService from '../appwrite/Conf'
function Allpost() {
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {},[])
    appwriteService.getposts([]).then((posts)=>{
        if(posts.length > 0) {
            setPosts(posts.documents)
        }
    })
  return (
    <div>
        <Container>
            <div className='flex flex-wrap gap-4 justify-center'>
            {posts.map((post) => (
                <div className='p-2 w-1/4' key={post.$id}>
                    <Postcard {...post} />
               </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default Allpost
