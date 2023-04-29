import { db } from "../Database/users.mjs";
export const Cv = {
  user: ({ id }, args) => db.users.find((user) => user.cvsId.includes(id)),
  skills: ({ skillsId }, args) => {
    return db.skills.filter((skill) => skillsId.includes(skill.id));
  },
};
