const dataBuffer = fs.readFileSync(filename)
const dataJSON = dataBuffer.toString();
const list = JSON.parse(dataJSON);

list.data.push({ title: "The Silent Patient", author: "Alex Michaelides" });
console.dir(list);


const listJSON = JSON.stringify(list);
fs.writeFileSync(filename, listJSON);