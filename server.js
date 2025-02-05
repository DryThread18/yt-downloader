const { exec } = require('child_process');
const path = require('path');

// Set the correct path to the yt-dlp.exe binary inside the 'bin' folder
const ytDlpPath = path.join(__dirname, 'bin', 'yt-dlp.exe');  // Adjust if needed

const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';  // Example URL

exec(`${ytDlpPath} ${url}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
