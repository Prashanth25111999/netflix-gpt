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
 
