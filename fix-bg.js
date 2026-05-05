const { Jimp } = require('jimp');

async function makeTransparent() {
  console.log('Processing white background image...');
  try {
    const inputPath = 'C:\\Users\\Administrador\\.gemini\\antigravity\\brain\\9d2e2a7d-35e7-4ba2-9a99-b592bbe2a539\\perfil_white_bg_png_1778000670054.png';
    const outputPath = 'public/perfil_no_bg.png';
    
    const image = await Jimp.read(inputPath);
    
    // Scan pixels and set alpha to 0 for white-ish pixels
    const tolerance = 245; // Adjust tolerance to remove slightly off-white edges
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      if (r >= tolerance && g >= tolerance && b >= tolerance) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel
      }
    });
    
    await image.write(outputPath);
    console.log('Success! Saved transparent image to ' + outputPath);
  } catch (err) {
    console.error('Error:', err);
  }
}

makeTransparent();
