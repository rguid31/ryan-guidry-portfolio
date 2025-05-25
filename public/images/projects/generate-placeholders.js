const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const projects = [
    'ai-training.jpg',
    'ux-optimization.jpg',
    'equipment-optimization.jpg',
    'maintenance-program.jpg',
    'control-system.jpg',
    'process-study.jpg',
    'sales-strategy.jpg',
    'chemical-process.jpg',
    'process-efficiency.jpg',
    'operations.jpg',
    'process-optimization.jpg',
    'chemical-trial.jpg',
    'loan-processing.jpg',
    'system-upgrade.jpg'
];

const width = 800;
const height = 600;

projects.forEach(filename => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, width, height);

    // Add border
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height);

    // Add text
    const text = filename.replace('.jpg', '').replace(/-/g, ' ');
    ctx.fillStyle = '#666';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width/2, height/2);

    // Save to file
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(path.join(__dirname, filename), buffer);
}); 