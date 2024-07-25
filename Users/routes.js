import * as dao from "./dao.js";

let currentUser = null;

export default function UserRoutes(app) {


  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);


  
  const deleteUser = async (req, res) => { 
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };
  app.delete("/api/users/:userId", deleteUser);




  const findAllUsers = async (req, res) => {  

    const { role, name } = req.query; // parse role from query string, name from "
    if (role) { // if role matches 
      const users = await dao.findUsersByRole(role); // use dao to retrieve users with that role
      res.json(users); // respond with json of filtered user list
      return; //exit the fn
    }

    if (name) { //if name matches
      const users = await dao.findUsersByPartialName(name);  // use dao to retrieve users with that name
      res.json(users);
      return;
    }


    const users = await dao.findAllUsers(); // else find all users regardless of role?
    res.json(users);
    
  };
  app.get("/api/users", findAllUsers);

  
  const findUserById = async (req, res) => { 
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };
  app.get("/api/users/:userId", findUserById);




  const updateUser = async (req, res) => { 
    const { userId } = req.params;
    const status = await dao.updateUser(userId, req.body);
    res.json(status);
  }; 
  app.put("/api/users/:userId", updateUser);



  const signup = async (req, res) => { };
  const signin = async (req, res) => { };
  const signout = (req, res) => { };
  const profile = async (req, res) => { };


  

  
  

  

  
  
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
