# Modern Image Slider

A sleek, responsive image slider (carousel) built with HTML, CSS, and JavaScript that provides a smooth and engaging user experience.

## Features

- 🎨 Modern, stylish UI with smooth transitions
- 🖱️ Manual navigation with Previous/Next buttons
- ⚪ Interactive dot indicators for quick navigation
- ⏱️ Automatic slideshow (3-second intervals)
- 📱 Fully responsive design (desktop, tablet, mobile)
- 👆 Pause on hover functionality
- 🔄 Seamless looping from first to last image

## How to Run the Project

1. **Download or Clone**
   - Download the ZIP file containing all project files
   - Or clone the repository if available

2. **Open the HTML File**
   - Locate the `index.html` file in the project directory
   - Double-click to open it in your web browser
   - Alternatively, right-click and select "Open with" to choose your preferred browser

3. **View in Browser**
   - The image slider will load automatically
   - No server setup is required - it runs directly in the browser

## How to Use the Image Slider

### Manual Navigation

- **Previous Button**: Click the left arrow button (←) to go to the previous image
- **Next Button**: Click the right arrow button (→) to go to the next image
- **Dot Indicators**: Click any dot at the bottom to jump directly to that image

### Automatic Slideshow

- The slider automatically transitions to the next image every 3 seconds
- Hover over the slider, buttons, or dots to pause the automatic slideshow
- Move your mouse away to resume automatic playback

### Responsive Behavior

- The slider adapts to different screen sizes
- On mobile devices, it reduces in height and adjusts control sizes
- Images maintain their aspect ratio and are cropped appropriately

## Project Structure

```
Image Slider/
├── index.html       # Main HTML structure
├── styles.css       # Styling and animations
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## Customization

### Adding More Images

1. Open `index.html` in a text editor
2. Add a new `<div class="slide">` element inside the `.slider` container
3. Include an `<img>` tag with your image source
4. Add a corresponding `<button class="dot">` to the `.dots-container`
5. Update the `data-index` attribute for the new dot

### Changing Auto-Slide Delay

1. Open `script.js` in a text editor
2. Locate the `autoSlideDelay` property in the `ImageSlider` class
3. Change the value (in milliseconds) to your desired delay

### Styling Changes

1. Open `styles.css` in a text editor
2. Modify colors, fonts, sizes, or animations as needed
3. Save and refresh the browser to see changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling, animations, and responsive design
- **JavaScript (ES6+)**: Class-based architecture, event handling

## License

This project is open source and available under the MIT License.