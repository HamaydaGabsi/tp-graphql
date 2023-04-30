export const Subscription = {
  cv: {
    subscribe: (parent, args, { db, pubSub }) => pubSub.subscribe("cv"),
    resolve: (payload) => {
      return payload;
    },
  },
};
