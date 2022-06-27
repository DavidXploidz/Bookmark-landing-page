import { createContext } from "react";


	const BookmarkContext = createContext()

	const BookmarkProvider = ({children}) => {

    	return(
       	 <BookmarkContext.Provider 
            	value={{
                
           	 }} 
       	 >
           	 {children}
        	</BookmarkContext.Provider>
   	 )
	}



	export {
    	BookmarkProvider
	}

	export default BookmarkContext