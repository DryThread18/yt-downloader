const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());

app.get("/download", (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: "No URL provided" });

    exec(`yt-dlp -f best -o - ${url}`, { maxBuffer: 1024 * 1024 * 10 }, (err, stdout, stderr) => {
        if (err) return res.status(500).json({ error: stderr });
        res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
        res.send(stdout);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
