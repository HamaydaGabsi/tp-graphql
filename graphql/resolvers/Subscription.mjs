export const Subscription = {
  cv: {
    subscribe: (parent, args, {  pubSub }) => pubSub.asyncIterator('cv'),

  },
};

