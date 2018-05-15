import { forwardTo } from '@volst/prisma-auth';
import { upload } from 'now-storage';
import * as streamToArray from 'stream-to-array';

export const Mutation = {
  createRestaurant: forwardTo({}),
  updateRestaurant: forwardTo({}),
  deleteRestaurant: forwardTo({}),
  createOrganization: forwardTo({}),
  updateOrganization: forwardTo({}),
  deleteOrganization: forwardTo({}),
  deleteEmployment: forwardTo({}),
  createCard: forwardTo({}),
  updateCard: forwardTo({}),
  deleteCard: forwardTo({}),
  singleUpload: async (obj, { file }) => {
    const { filename, stream } = await file;
    const buffers = await streamToArray(stream);
    const content = Buffer.concat(buffers);

    // TODO: needs better error handling
    // TODO: add a max file size
    const { url } = await upload(
      process.env.NOW_TOKEN,
      {
        name: filename,
        content,
      },
      {
        deploymentName: 'foed-media',
        teamId: 'volst',
      }
    );
    return { url: `https://${url}` };
  },
};
