import { db } from "../Database/users.mjs";
import { GraphQLError } from "graphql";
export const Query = {
  hello: (_, { name }) => `Hello from ${name || "world"}!`,
  getAllUsers: () => db.users,
  getAllCvs: () => db.cvs,
  getCvById: (_, { id }) => {
    const cv = db.cvs.find((cv) => cv.id === parseInt(id));
    if (!cv) throw new GraphQLError(`CV with id '${id}' not found.`);
    
    return cv
  },
};
