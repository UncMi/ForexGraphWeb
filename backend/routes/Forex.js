const express = require("express");
const router = express.Router();
const { spawnSync } = require('child_process');
const { ForexInfo } = require("../models");

let forexInfo = {};

// Function to fetch data from Python script
function fetchDataFromPython() {
    const pythonProcess = spawnSync('python', ['../python/main.py']);

    if (pythonProcess.stderr.length > 0) {
        console.error(`Error executing Python script: ${pythonProcess.stderr.toString()}`);
        return; // Return if there's an error
    }

    forexInfo = pythonProcess.stdout.toString('utf-8').trim();

    console.log("Python script execution completed.");
}

// Initial data fetch
//fetchDataFromPython();

// Set interval to periodically fetch data from Python script
//const interval = setInterval(fetchDataFromPython, 120000); 

// Route handler for fetching forex info
router.get("/", async (req, res) => {
    // Send the forexInfo as response to the client
    res.json(forexInfo);
});


module.exports = router;
