import fs from 'fs';
import path from 'path';
import buildDiff from './buildDiff.js';
import parse from './parsers.js';
import format from './formatters/index.js';

const getData = (filePath) => {
  const fileFormat = path.extname(filePath).slice(1);
  const data = fs.readFileSync(filePath, 'utf-8');
  return parse(data, fileFormat);
};

const gendiff = (filePath1, filePath2, formatType = 'stylish') => {
  const obj1 = getData(filePath1);
  const obj2 = getData(filePath2);
  const diff = buildDiff(obj1, obj2);
  return format(diff, formatType);
};

export default gendiff;
