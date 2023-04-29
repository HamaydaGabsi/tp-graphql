export const Cv = {
  user: ({ id }, args, { db }) =>
    db.users.find((user) => user.cvsId.includes(id)),
  skills: ({ skillsId }, args, { db }) => {
    return db.skills.filter((skill) => skillsId.includes(skill.id));
  },
};
