import Parse from "parse";

export const createUser = (newUser) => {
    const user = new Parse.User();
  
    user.set("username", newUser.username);
    user.set("email", newUser.email);
    user.set("password", newUser.password);
    user.set("organismPoints", 2);
  
    return user
      .signUp()
      .then((newUserSaved) => {
        console.log("new user: ", newUserSaved);
        return newUserSaved;
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const logInUser = (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.username);
    user.set("password", newUser.password);

    return user
        .logIn()
        .then((userLoggedIn) => {
        console.log("logged in: ", userLoggedIn);
        return userLoggedIn;
        }).then((d) => {

            Parse.Cloud.run('setUsersAcls', {test: "test"})
            return d;
        })
        .catch((error) => {
        console.log(error);
        });
};

export const usernameUsed = (newUser) => {
    const user = Parse.Object.extend("User");
    const query = new Parse.Query(user);
    query.equalTo("username", newUser['username']);
    return query.find().then((results) => {
        return results.length;
    });
}

export const emailUsed = (newUser) => {
    const user = Parse.Object.extend("User");
    const query = new Parse.Query(user);
    query.equalTo("email", newUser['email']);
    return query.find().then((results) => {
        return results.length;
    });
}
  
export const checkCurrentUser = () => {
    return Parse.User.current()?.authenticated();
};

export const logOutUser = () => {
    return Parse.User.logOut();
};

export const getCurrentUser = () => {
    return Parse.User.current();
};