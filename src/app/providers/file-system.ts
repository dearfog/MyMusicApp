import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

const { Filesystem } = Plugins;

export const fileWrite = async () => {
  try {
    const result = await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data: 'This is a test',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
    console.log('Wrote file', result);
  } catch  (e) {
    console.error('Unable to write file', e);
  }
};

export const fileRead = async () => {
  const contents = await Filesystem.readFile({
    path: 'secrets/text.txt',
    directory: FilesystemDirectory.Documents,
    encoding: FilesystemEncoding.UTF8
  });
  console.log(contents);
};

export const fileAppend = async () => {
  await Filesystem.appendFile({
    path: 'secrets/text.txt',
    data: 'MORE TESTS',
    directory: FilesystemDirectory.Documents,
    encoding: FilesystemEncoding.UTF8
  });
};

export const fileDelete = async () => {
  await Filesystem.deleteFile({
    path: 'secrets/text.txt',
    directory: FilesystemDirectory.Documents
  });
};

export const mkdir = async () => {
  try {
    const ret = await Filesystem.mkdir({
      path: 'secrets',
      directory: FilesystemDirectory.Documents,
      recursive: false // like mkdir -p
    });
  } catch (e) {
    console.error('Unable to make directory', e);
  }
};

export const rmdir = async () => {
  try {
    const ret = await Filesystem.rmdir({
      path: 'secrets',
      directory: FilesystemDirectory.Documents,
      recursive: false,
    });
  } catch (e) {
    console.error('Unable to remove directory', e);
  }
};

export const readdir = async () => {
  try {
    const ret = await Filesystem.readdir({
      path: 'secrets',
      directory: FilesystemDirectory.Documents
    });
  } catch (e) {
    console.error('Unable to read dir', e);
  }
};

export const stat = async () => {
  try {
    const ret = await Filesystem.stat({
      path: 'secrets/text.txt',
      directory: FilesystemDirectory.Documents
    });
  } catch (e) {
    console.error('Unable to stat file', e);
  }
};

export const readFilePath = async () => {
  // Here's an example of reading a file with a full file path. Use this to
  // read binary data (base64 encoded) from plugins that return File URIs, such as
  // the Camera.
  try {
    const data = await Filesystem.readFile({
      path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
    });
  } catch (error) {
    console.log(error);
  }
};

export const rename = async () => {
  try {
    // This example moves the file within the same 'directory'
    const ret = await Filesystem.rename({
      from: 'text.txt',
      to: 'text2.txt',
      directory: FilesystemDirectory.Documents
    });
  } catch (e) {
    console.error('Unable to rename file', e);
  }
};

export const copy = async () => {
  try {
    // This example copies a file within the documents directory
    const ret = await Filesystem.copy({
      from: 'text.txt',
      to: 'text2.txt',
      directory: FilesystemDirectory.Documents
    });
  } catch (e) {
    console.error('Unable to copy file', e);
  }
};
