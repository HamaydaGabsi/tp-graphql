export const db = {
  users: [
    {
      id: 3,
      name: "Julie.Hopkins90",
      email: "julie+hopkins@libero.net",
      role: "Admin",
      cvsId: [3]

    },
    {
      id: 1,
      name: "Anita.Mori",
      email: "anita+mori@bol.org",
      role: "User",
      cvsId: [1]
    },
    {
      id: 2,
      name: "Klaus.Usman72",
      email: "klaususman@hotmail.info",
      role: "User",
      cvsId: [2]
    },
  ],
  cvs: [
    {
      id: 1,
      name: "Hopkins",
      age: 27,
      job: "Global Optimization Associate",
      userId:1,
      skillsId: [1,2]
    },
    {
      id: 3,
      name: "Usman",
      age: 39,
      job: "Internal Integration Representative",
      userId:3,
      skillsId: [2,3]
    },
    {
      id: 2,
      name: "Mori",
      age: 35,
      job: "Investor Program Architect",
      userId:2,
      skillsId: [3,4]
    },
  ],
  skills: [
    {
      id: 3,
      designation: "Critical thinking",
    },
    {
      id: 4,
      designation: "Microsoft office proficiency",
    },{
      id: 1,
      designation: "Process automation",
    },
    {
      id: 2,
      designation: "Self-motivation",
    },
  ],
};
// export const users=[
//   {
//     id: 3,
//       name: "Julie.Hopkins90",
//     email: "julie+hopkins@libero.net",
//     role: "Admin",
//     cvs: [
//       {
//         id: 1,
//         name: "Hopkins",
//         age: 27,
//         job: "Global Optimization Associate",
//         skills: [
//           {
//             id: 3,
//             designation: "Critical thinking",
//           },
//           {
//             id: 4,
//             designation: "Microsoft office proficiency",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 1,
//       name: "Anita.Mori",
//     email: "anita+mori@bol.org",
//     role: "User",
//     cvs: [
//       {
//         id: 2,
//         name: "Mori",
//         age: 35,
//         job: "Investor Program Architect",

//         skills: [
//           {
//             id: 1,
//             designation: "Process automation",
//           },
//           {
//             id: 2,
//             designation: "Self-motivation",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//       name: "Klaus.Usman72",
//     email: "klaususman@hotmail.info",
//     role: "User",
//     cvs: [
//       {
//         id: 3,
//         name: "Usman",
//         age: 39,
//         job: "Internal Integration Representative",

//         skills: [
//           {
//             id: 2,
//             designation: "Self-motivation",
//           },
//           {
//             id: 3,
//             designation: "Critical thinking",
//           },
//         ],
//       },
//     ],
//   },
// ];
