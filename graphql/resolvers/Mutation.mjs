import { GraphQLError } from "graphql";
export const Mutation = {
  addCv: (_, { addCvInput }, { db,pubSub }) => {
    const { name, age, job, skillsId, userId } = addCvInput;
    if (!db.users.map((user) => user.id).includes(parseInt(userId)))
      throw new GraphQLError(`User with id '${userId}' not found.`);
    const newSkills = skillsId.map((id) => parseInt(id));

    const oldSkills = db.skills.map((skill) => skill.id);

    for (let id of newSkills) {
      if (!oldSkills.includes(id))
        throw new GraphQLError(`Skill with id '${id}' not found.`);
    }
    const newId = db.cvs[db.cvs.length - 1].id + 1;

    const newCv = {
      id: newId,
      name,
      age,
      job,
      skillsId: newSkills,
      userId,
    };
    db.cvs.push(newCv);
    pubSub.publish('cv',{cv:{cv:newCv,mutationType:"Add"}})
    return newCv;
  },
  editCv: (_, { id, editCvInput }, { db,pubSub }) => {
    if (!db.cvs.map((cv) => cv.id).includes(parseInt(id)))
      throw new GraphQLError(`Cv with id '${id}' not found.`);
    const cv = db.cvs.find((cv) => (cv.id = id));

    if (editCvInput.skillsId) {
      const newSkills = editCvInput.skillsId.map((id) => parseInt(id));

      const oldSkills = db.skills.map((skill) => skill.id);

      for (let id of newSkills) {
        if (!oldSkills.includes(id))
          throw new GraphQLError(`Skill with id '${id}' not found.`);
      }
      cv.skillsId = newSkills;
    }

    if (editCvInput.name) {
      cv.name = editCvInput.name;
    }
    if (editCvInput.age) {
      cv[age] = editCvInput.age;
    }
    if (editCvInput.job) {
      cv[job] = editCvInput.job;
    }
    cv.id = parseInt(cv.id);
    console.log(cv);
    pubSub.publish('cv',{cv:{cv:cv,mutationType:"Edit"}})
    return cv;
  },
  deleteCv: (_, { id }, { db ,pubSub}) => {
    const indexCv = db.cvs.findIndex((cv)=>cv.id==id);
    if(indexCv === -1){
      throw new GraphQLError(`Cv with id '${id}' not found.`);
    }
    const [cv]=db.cvs.splice(indexCv,1);
    pubSub.publish('cv',{cv:{cv:cv,mutationType:"Delete"}})

    return cv
  },
};
