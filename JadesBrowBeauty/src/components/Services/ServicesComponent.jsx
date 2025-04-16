// file path to app.jsx: ../../App.jsx
// Mock data fetching function - replace with actual API call if needed

/**
 * Retrieves a predefined list of services.
 * In a real application, this would likely fetch data from an API.
 * @returns {Array<Object>} An array of service objects.
 */

// Define an object for service categories.
export const SERVICE_CATEGORIES = {
	BROWS: 'Brows',
	BROWS_LASHES: 'Brows & Lashes',
	FACIAL: 'Facial Waxing',
	BODY: 'Body Waxing',
};

// Array of service objects representing each service offered.
// Includes image paths directly in the data.
export default function ServicesList() {
  return [
    // Brow Services
    {
      id: 1,
      name: 'Brow Wax',
      price: 30,
      image: '/BrowShape.png', // Added image path
      description: 'Precision brow waxing to clean and shape your brows.',
      category: SERVICE_CATEGORIES.BROWS,
      duration: '20 min',
      popularity: 6,
    },
    {
      id: 2,
      name: 'Brow Wax & Tint',
      price: 50,
      image: '/BrowtintShape.png', // Added image path
      description: 'Combine waxing with a tint for added definition. Includes an add-on tint option.',
      category: SERVICE_CATEGORIES.BROWS,
      duration: '20 min',
      popularity: 7,
    },
    {
      id: 3,
      name: 'Lash Lamination & Tint',
      price: 120,
      image: '/Browandlash.png', // Added image path (assuming this is correct)
      description: 'Enhance your lashes with lamination and tint for a natural lift.',
      category: SERVICE_CATEGORIES.BROWS_LASHES,
      duration: '1 hr',
      popularity: 8,
    },
    {
      id: 4,
      name: 'Brow Wax & Lamination',
      price: 100,
      image: '/BrowtintShape.png', // Added image path (assuming same as tint)
      description: 'Achieve styled brows with waxing and lamination. Tint option available at $120.',
      category: SERVICE_CATEGORIES.BROWS,
      duration: '45 min',
      popularity: 7,
    },
    {
      id: 5,
      name: 'Brow & Lash Lux',
      price: 140,
      image: '/ultimateBrowandLash.png', // Added image path (assuming this is correct)
      description: 'A premium treatment combining brow and lash services. Enhanced service with an optional tint upgrade available at $160.',
      category: SERVICE_CATEGORIES.BROWS_LASHES,
      duration: '1 hr',
      popularity: 9,
      highlight: true,
    },
    // Facial Waxing
    {
      id: 6,
      name: 'Full Face Waxing',
      price: 80,
      image: '/fullFaceWax.png', // Added image path
      description: 'Comprehensive waxing covering the entire face for a smooth finish.',
      category: SERVICE_CATEGORIES.FACIAL,
      duration: '30 min',
      popularity: 6,
    },
    {
      id: 7,
      name: 'Half Face Waxing', // Assuming ID 7 maps to this based on App.jsx featured IDs
      price: 60,
      image: '/fullface.png', // Added image path (assuming this is correct)
      description: 'Partial facial waxing to remove unwanted hair quickly and efficiently.',
      category: SERVICE_CATEGORIES.FACIAL,
      duration: '20 min',
      popularity: 5,
    },
    {
      id: 8,
      name: 'Nose Waxing',
      price: 15,
      image: '/min.png', // Added image path (placeholder?)
      description: 'Gentle waxing to remove nasal hair with minimal discomfort.',
      category: SERVICE_CATEGORIES.FACIAL,
      duration: '10 min',
      popularity: 5,
    },
    {
      id: 9,
      name: 'Lip Waxing',
      price: 15,
      image: '/min.png', // Added image path (placeholder?)
      description: 'Quick and precise waxing for the upper lip for a clean look.',
      category: SERVICE_CATEGORIES.FACIAL,
      duration: '10 min',
      popularity: 5,
    },
    {
      id: 10,
      name: 'Chin Waxing',
      price: 20,
      image: '/min.png', // Added image path (placeholder?)
      description: 'Effective waxing for the chin area to enhance facial aesthetics.',
      category: SERVICE_CATEGORIES.FACIAL,
      duration: '10 min',
      popularity: 5,
    },
    // Body Waxing
    {
      id: 11,
      name: 'Underarm Waxing',
      price: 30,
      image: '/underArm.png', // Added image path
      description: 'Smooth and hygienic waxing for the underarm area.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '15 min',
      popularity: 5,
    },
    {
      id: 12,
      name: 'Full Arm Waxing',
      price: 60,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Complete arm waxing to leave your arms smooth and hair-free.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '30 min',
      popularity: 6,
    },
    {
      id: 13,
      name: 'Half Arm Waxing',
      price: 40,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Targeted waxing for either the upper or lower arm areas.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '20 min',
      popularity: 5,
    },
    {
      id: 14,
      name: 'Full Leg Waxing',
      price: 80,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Complete leg waxing for long-lasting smoothness.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '40 min',
      popularity: 7,
    },
    {
      id: 15,
      name: 'Lower Leg Waxing',
      price: 45,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Focused waxing on the lower leg for a neat finish.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '25 min',
      popularity: 6,
    },
    {
      id: 16,
      name: 'Chest Wax',
      price: 50,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Professional chest waxing for a clean and refined appearance.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '20 min',
      popularity: 6,
    },
    {
      id: 17,
      name: 'Full Back Wax',
      price: 80,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Comprehensive waxing to achieve a completely hair-free back.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '40 min',
      popularity: 7,
    },
    {
      id: 18,
      name: 'Upper/Lower Wax', // Assuming Back Wax
      price: 45,
      image: '/image (1).webp', // Added image path (placeholder?)
      description: 'Combined waxing for both upper and lower sections of the body.', // Description seems off?
      category: SERVICE_CATEGORIES.BODY,
      duration: '25 min',
      popularity: 6,
    },
    {
      id: 19,
      name: 'Bikini Line Wax',
      price: 45,
      image: '/image (1).webp', // Added image path (placeholder?) - Should map to 21?
      description: 'Precision waxing for a well-groomed bikini line.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '15 min',
      popularity: 5,
    },
    {
      id: 20,
      name: 'Brazilian Wax',
      price: 60,
      image: '/image (2).webp', // Added image path (placeholder?) - Should map to 22?
      description: 'Full Brazilian waxing for a complete hair removal solution.',
      category: SERVICE_CATEGORIES.BODY,
      duration: '30 min',
      popularity: 6,
    },
    // Note: IDs 21, 22, 23 from the original imageMap are not present here.
    // Add them if they represent distinct services.
    // Example:
    // {
    //   id: 21, // Corresponds to Bikini Line?
    //   name: 'Bikini Line Wax (Alt?)',
    //   price: 45,
    //   image: '/image (1).webp',
    //   description: '...',
    //   category: SERVICE_CATEGORIES.BODY,
    //   duration: '15 min',
    //   popularity: 5,
    // },
    // {
    //   id: 22, // Corresponds to Brazilian?
    //   name: 'Brazilian Wax (Alt?)',
    //   price: 60,
    //   image: '/image (2).webp',
    //   description: '...',
    //   category: SERVICE_CATEGORIES.BODY,
    //   duration: '30 min',
    //   popularity: 6,
    // },
  ];
}