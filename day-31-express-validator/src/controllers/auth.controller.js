// export async function registerUser(req,res, next) {
//   try {
//     throw new Error("encounter an error while registering new user");
//   } catch (error) {
//     next(error)
//   }
// }

// export async function registerUser(req, res, next) {
//   try {
//     throw new Error("Password is too weak");
//   } catch (error) {
//     error.status = 400;
//     next(error);
//   }
// }

// export async function registerUser(req, res, next) {
//   try {
//     throw new Error("User already exists, with same email");
//   } catch (error) {
//     error.status = 409;
//     next(error);
//   }
// }

// export async function registerUser(req, res, next) {
//   try {
//     console.log(user)
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// }

export async function registerUser(req, res, next) {
  res.status(201).json({
    message: "User registered successfully",
  });
}

/**
 * user => {
 * username:{type: String, required: true},
 * email:{type: String, required: true, unique: true},
 * password:{type: String, required: true},
 * }
 */
