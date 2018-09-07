import { upload } from 'now-storage';
import * as streamToArray from 'stream-to-array';
import * as sharp from 'sharp';

export const Mutation = {
  imageUpload: async (obj, { file }, ctx) => {
    const { filename, stream } = await file;
    const buffers = await streamToArray(stream);
    const originalContent = Buffer.concat(buffers);

    const content = await sharp(originalContent)
      .resize(225, 225)
      .background('black')
      .jpeg({
        quality: 70,
        chromaSubsampling: '4:4:4',
      })
      .toBuffer();

    // TODO: needs better error handling
    // TODO: add a max file size
    const { url } = await upload(
      process.env.BACKEND_NOW_TOKEN,
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

export const Query = {};
