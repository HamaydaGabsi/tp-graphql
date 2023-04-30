import { GraphQLError } from "graphql";
export const Mutation = {
  addCv: (_, { addCvInput }, { db }) => {
    const {name, age, job, skillsId, userId}= addCvInput
    if (!db.users.map((user) => user.id).includes(parseInt(userId)))
      throw new GraphQLError(`User with id '${userId}' not found.`);
    const newSkills = skillsId.map((id) => parseInt(id));

    const oldSkills = db.skills.map((skill) => skill.id);

    for (let id of newSkills) {
      if (!oldSkills.includes(id))
        throw new GraphQLError(`Skill with id '${id}' not found.`);
    }
    const newId= db.cvs[db.cvs.length-1].id+1
    
    const newCv={
      id:newId,name,age,job,skillsId:newSkills,userId
    }
    db.cvs.push(newCv)
    return newCv;

  },
};
