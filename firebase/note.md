```js
import {db} from "./config/firebase";
import {getDocs, collection, addDoc} from "firebase/firestore";

export default function App(){
    const [movieList, setMovieList] = useState([])
    const moviesCollectionRef = collection(db, "movies")

    useEffect(()=> {
        const getMoviesList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((doc)=>{
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setMovieList(filteredData)
            } catch(err){
                console.log(err)
            }
        }
       getMovieList()
    }, [])

    const handleSubmit = () => {
        
    }
}


```