const fse = require("fs-extra");
const fs = require("fs");

async function createDirectory(directory) {
  try {
    await fse.ensureDir(`${directory}`);
    console.log("Successfully added folders!");
  } catch (err) {
    console.error(err);
  }
}

async function createFile(path, data) {
  fs.writeFile(
    path,
    data.split(";base64").pop(),
    { encoding: "base64" },
    function (err) {
      console.log(`File: ${path} created`);
    },
  );
}

async function deleteFile(path) {
  try {
    fs.rmSync(path);

    return !fs.existsSync(path);
  } catch (error) {
    return false;
  }
}

module.exports = {
  createDirectory,
  createFile,
  deleteFile,
};
