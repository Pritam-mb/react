import React, { use } from 'react'
import { useEffect ,useState} from 'react'
import appwriteService from '../appwrite/Conf'
import { useNavigate,useParams } from 'react-router-dom'
import { Postform, Container } from '../components/Index'
function Editpost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if(sluf){
            appwriteService.getpost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } 
        })

        } else {
            navigate('/')}
    },[slug, navigate]);
  return post ? (
    <div className='py-8'>
        <Container>
            <Postform post={post} />
        </Container>
    </div>
  ) : null
}

export default Editpost
