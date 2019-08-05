const User = require("../../models/User");
const UserSession = require("../../models/UserSession");
module.exports = app => {
  app.post("/api/account/signup", (req, res, next) => {
    const { body } = req;
    const { firstName, lastName, password } = body;
    let { email } = body;
    //If time permits, verify input is an actual
    if (!firstName) {
      return res.send({
        success: false,
        message: "Error: First name cannot be blank."
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: "Error: Last name cannot be blank."
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: Password cannot be blank."
      });
    }

    email = email.toLowerCase();

    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save

    User.find(
      {
        email: email
      },
      (err, previousUsers) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        } else if (previousUsers.length > 0) {
          return res.send({
            success: false,
            message: "Error: Account already exists"
          });
        }
        //Save the new user
        const newUser = new User();
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: Server error"
            });
          }
          return res.send({
            success: true,
            message: "Success: Sign up complete "
          });
        });
      }
    );
  });
  app.post("/api/account/signin", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let { email } = body;
    if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: Password cannot be blank."
      });
    }
    email = email.toLowerCase();

    // Find the user, their password, and check their password //

    User.find(
      {
        email: email
      },
      (err, users) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }
        //if we don't find a user//
        if (users.length != 1) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          });
        }
        //if the password is invalid//
        const user = users[0];
        if (!user.validPassword(password)) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          });
        }

        //Otherwise correct user, create a userSession//

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
          if (err) {
            return res.send({
              success: false,
              message: "Error: server error"
            });
          }
          //every time a user logs in, a new document is created. each document has an _id//
          //the token will be saved on the browser//
          //doc._id points back to a userId//
          return res.send({
            success: true,
            message: "Valid sign in",
            token: doc._id
          });
        });
      }
    );
  });
  app.get("/api/account/verify", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and is not deleted
    UserSession.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server Error"
          });
        }

        if (sessions.length != 1) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          });
        } else {
          return res.send({
            success: true,
            message: "Session is Valid",
            token: token
          });
        }
      }
    );
  });
  app.get("/api/account/logout", (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // Verify the token is one of a kind and is not deleted.
    // update the isDeleted property to true
    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: { isDeleted: true }
      },
      null,
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server Error"
          });
        }

        return res.send({
          success: true,
          message: "Log out successful"
        });
      }
    );
  });
};
