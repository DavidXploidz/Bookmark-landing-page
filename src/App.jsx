import {BookmarkProvider} from './context/BookmarkProvider'
import AppBookmark from "./components/AppBookmark"

	function App() {


  	return (
    	<BookmarkProvider>
      	<AppBookmark />  
    	</BookmarkProvider>
    
 	 )
	}

	export default App