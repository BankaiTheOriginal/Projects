function arrayChunk(array, size) {
  let chunked = [];
  for (i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    chunked.push(chunk);
  }
  console.log(chunked);
}

arrayChunk([1, 2, 3, 4, 5], 2);
