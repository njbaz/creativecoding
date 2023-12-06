document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the distance between two points
    function calculateDistance(point1, point2) {
      const dx = point1.x - point2.x;
      const dy = point1.y - point2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
    // Function to check if a position is within 200 pixels of any other icon
    function isTooClose(position, existingPositions) {
      for (const existingPosition of existingPositions) {
        if (calculateDistance(position, existingPosition) < 500) {
          return true;
        }
      }
      return false;
    }
  
    // Function to set a random position for an element, avoiding proximity to other icons
    function setRandomPosition(element, existingPositions) {
      do {
        const randomX = Math.random() * (window.innerWidth - element.clientWidth);
        const randomY = Math.random() * (window.innerHeight - element.clientHeight);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
      } while (isTooClose({ x: parseFloat(element.style.left), y: parseFloat(element.style.top) }, existingPositions));
    }
  
    // Function to make an element slowly appear
    function fadeIn(element) {
      element.style.opacity = '1';
    }
  
    // Get all icon elements
    const icons = document.querySelectorAll('.icon');
  
    // Array to store the positions of placed icons
    const iconPositions = [];
  
    // Set random positions for each icon
    icons.forEach(icon => {
      setRandomPosition(icon, iconPositions);
      iconPositions.push({ x: parseFloat(icon.style.left), y: parseFloat(icon.style.top) });
  
      // Use setTimeout to stagger the appearance of each icon
      setTimeout(() => {
        fadeIn(icon);
      }, Math.random() * 3000); // Adjust the time delay as needed
    });
  });
  
