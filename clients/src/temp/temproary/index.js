import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
const git = simpleGit();

function getRandomGap(min = 1, max = 3) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function run() {
  let currentDate = moment();

  for (let i = 0; i < 30; i++) {
    const gap = getRandomGap(1, 3);
    currentDate = currentDate.subtract(gap, "days");

    const date = currentDate.format();

    const data = { date };

    await jsonfile.writeFile(path, data);

    await git.add([path]);
    await git.commit(date, { "commit sucessfully": date });
    await git.push();

    console.log(`Committed and pushed for date: ${date} (gap: ${gap} days)`);
  }
}

run().catch(console.error);
