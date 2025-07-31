# Netflix GPT
1.Craeted our app by using create-react-app@latest netflix-gpt.
(Command to go back one step from current path is cd ..)
2.Configured tailwaindCSS to our project.(IMP--Need to specifi the file types to apply styles)
3.Created the components and utils folder under src to write components
4.Installed the react-router-dom(npm i -D react-router-dom) for dynamic routing based on the url path
(createBrowserRouter(it will take array of objects(path,element,errorElement)) and added the exact route and used useRouteError()) 
5.Created the Header component and renderd inside body 
6.Created Body component and added the image and and form and required CSS(z-index bg-gradient opacity and positions)
7.Created the Sign Up and Sign In form and toggled based on state changes onClick
8.Created handleButton function to handle the validate logic and created separate validate function in utils and by using REGEX and test() handled validate 
9.Used the useRef() hook (Used to get the input values of the input tags) to get the input fields value and passed it in the validate function.
10.Login In to google firebase and created the project and then installed the firebase pakage in vscode and login to firebase in vscode and init that and slected the options and build the project and  deployed 
11.Created the Redux-Store to store the usr data and created the slice and provided that slice in our store and provided our store in app to access the user data all other child components of app
12.By consuming createUser and sigUpUser firebase APIs to create the users and signup the users and used updateProfile api also to update the name of the user 
13.by using useDispatch we dispatched the user details to our slice 
14.Added the useNavigate Hook to navigate to browse page after immediate signUp or signIn 
15.In Header component subscribe (useSelector()) the store to display the signOut button based on the user null condition 
16.we can not access the browse page without login and afterlogin cannot goto login page adde that in authcahnge for proper behaviour of application 
17.Unsubscribe to the auth change after the components unmounts 
18.Created the accont in TMDB for APIs 
19.Consumed the nowPlayingMovieLists API 
20.Created the slice of movies and added the nowPlayingMovies data to that slice by using dispatch function (addNowPlayingMovies)
21.Created the Maincontainer and Secondarycontainer and Videotitle and Videobackground components and renderd accordingly 
22.By using nowPlayingMovies data took the first element and took the title and overview and id to pass it to child components 
23.Designed the Videotitle component and make it absolute to float on the Videobackground component 
24.Took the VIDEOS API to display the trailer on the Videobackground component and utilized the api and passed the movieId to it 
25.Created the reducerFunction to add the videos list to moviesSlice and utilized the key of the data and passed into EMBEDED of the iframe  
26.Make the iframe autoplay and mute.
27.Completed the Secondary component functinality 
28.Inside secondary component created the menulist component to show the list of menus
29.inside menulist rendered the menucard component to show the movies card and make that floting on     trailer 
30.Created the taprated and upcoming and trending videos reducer function inside movieslice and dispatched the action after the respective api calls 


# Features
Login/Sign Up
    Sign In/Sign Up form
Browse(after authentication)
    Header
    Main Movie
        Trailer in Background
        Tiltle and Descreption
        MovieSuggestions
            MovieLists * N
NetflixGPT
    SearchBar
    MovieSuggestions

    
 
