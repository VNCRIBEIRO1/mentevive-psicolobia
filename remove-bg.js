const { Jimp } = require('jimp');

async function removeWhiteBackground() {
  console.log('Reading logo.jpeg...');
  try {
    const image = await Jimp.read('public/logo.jpeg');
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    // We scan through the image. 
    // Since it's a JPEG, white might not be exactly #FFFFFF. 
    // It might be 240, 248, etc, due to compression artifacts.
    const tolerance = 230;

    for (let i = 0; i < image.bitmap.data.length; i += 4) {
      const r = image.bitmap.data[i];
      const g = image.bitmap.data[i+1];
      const b = image.bitmap.data[i+2];

      if (r > tolerance && g > tolerance && b > tolerance) {
        image.bitmap.data[i+3] = 0; // Alpha
      }
    }

    image.write('public/logo.png', () => {
      console.log('Successfully saved logo.png with transparent background!');
    });
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

removeWhiteBackground();
