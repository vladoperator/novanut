import Jimp from 'jimp';

async function processImage(inputPath, outputPath) {
  console.log(`Loading image from ${inputPath}...`);
  const image = await Jimp.read(inputPath);
  
  console.log('Processing pixels...');
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Check if pixel is predominantly green
    if (g > 150 && r < 100 && b < 100) {
      this.bitmap.data[idx + 3] = 0; // Transparent
    } else if (g > 100 && r < 150 && b < 150 && g > r * 1.5 && g > b * 1.5) {
      // Soft edge for anti-aliasing
      const alpha = Math.max(0, 255 - (g - Math.max(r, b)) * 2);
      this.bitmap.data[idx + 3] = alpha;
    }
  });

  console.log(`Saving to ${outputPath}...`);
  await image.writeAsync(outputPath);
  console.log('Done!');
}

async function main() {
  await processImage(
    '/Users/nicolaetonu/.gemini/antigravity-ide/brain/8d30203b-6a5a-4d9a-9cc3-f407540b4991/giant_walnut_raw_1786626303754.jpg',
    '/Users/nicolaetonu/Documents/novanut/public/giant_walnut.png'
  );
  await processImage(
    '/Users/nicolaetonu/.gemini/antigravity-ide/brain/8d30203b-6a5a-4d9a-9cc3-f407540b4991/shell_walnut_raw_1786626315698.jpg',
    '/Users/nicolaetonu/Documents/novanut/public/shell_walnut.png'
  );
}

main().catch(console.error);
