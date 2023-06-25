import { readdir, stat } from 'node:fs';
import { cwd } from 'node:process';
import { join } from 'node:path';

export const ls = () => {
  const path = cwd();

  readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) console.error(err);

    const direcories = files.filter(file => file.isDirectory()).sort((a, b) => a.name - b.name);
    const filesInCatalog = files.filter(file => file.isFile()).sort((a, b) => a.name - b.name);

    const contentTable = [];

    direcories.forEach(directory => contentTable.push({ Name: directory.name, Type: 'direcory' }));
    filesInCatalog.forEach(file => contentTable.push({ Name: file.name, Type: 'file' }));


    console.table(contentTable)
  })
}
