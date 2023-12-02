import { createReadStream } from 'fs';

export async function loadFile(filePath: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const data: string[] = [];
    createReadStream(filePath)
      .on('data', (chunk) => {
        data.push(...chunk.toString('utf-8').split('\n'));
      })
      .on('error', (err) => {
        reject(err);
      })
      .on('end', () => {
        resolve(data);
      });
  });
}
