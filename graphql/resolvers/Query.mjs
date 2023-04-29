import { GraphQLError } from "graphql";
export const Query = {
  hello: (_, { name }) => `Hello from ${name || "world"}!`,
  getAllUsers: (_, args, { db }) => db.users,
  getAllCvs: (_, args, { db }) => db.cvs,
  getCvById: (_, { id }, { db }) => {
    const cv = db.cvs.find((cv) => cv.id === parseInt(id));
    if (!cv) throw new GraphQLError(`CV with id '${id}' not found.`);

    return cv;
  },
};
