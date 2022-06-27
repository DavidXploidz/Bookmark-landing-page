import { useContext } from "react";
import BookmarkContext from '../context/BookmarkProvider'


const useBookmark = () => {

        return useContext(BookmarkContext)

}

export default useBookmark