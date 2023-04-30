export const typeDefs = `
enum RoleEnum{
  Admin,
  User
}
type Query {
  hello(name: String): String!
  getAllUsers: [User]
  getAllCvs: [Cv]
  getCvById(id: ID): Cv
}
input AddCvInput {
  name : String!,
  age : Int!,
  job : String!,
  skillsId: [ID],
   userId: ID!
}
input EditCvInput {
  name : String
  age : Int,
  job : String,
  skillsId: [ID],
}
type Mutation{
  addCv (addCvInput : AddCvInput!) : Cv!
  editCv (id: ID! ,editCvInput: EditCvInput!) : Cv!
  deleteCv (id: ID!) : Cv!
}
type Cv {
  id: ID!,
  name : String!,
  age : Int!,
  job : String!
  skills: [Skill]
  user: User!

}
type Skill{
  id: ID!,
  designation: String!
}
type User{
  id : ID!,
  name : String!,
  email: String!,
  role: RoleEnum!
  cvs: [Cv]
}
`;
