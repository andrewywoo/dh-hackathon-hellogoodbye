// Canvas Constants
export const CANVAS_MAX_HEIGHT = 600;
export const CANVAS_MAX_WIDTH = 800;

// Mountain Constants
export const CANVAS_HALF_MAX_HEIGHT = CANVAS_MAX_HEIGHT / 2;
export const FIRST_MOUNTAIN_LOWER_Y_RANGE = CANVAS_HALF_MAX_HEIGHT + 100;
export const SECOND_MOUNTAIN_MAX_HEIGHT = CANVAS_HALF_MAX_HEIGHT + 120;
export const SECOND_MOUNTAIN_LOWER_Y_RANGE = SECOND_MOUNTAIN_MAX_HEIGHT + 50;

// Sun Constants
export const SUN_DIAMETER = CANVAS_MAX_HEIGHT / 4;

// Star Constants
export const STAR_RADIUS = [[1, 3], [1, 6], [3, 12]];
export const STAR_APPEARANCE_PERCENTAGE = 5;

// Horizon Constants
export const HORIZON_HEIGHT = CANVAS_HALF_MAX_HEIGHT + 15;

// Color Themes
export const HORIZON_TONES = [
    [31, 120, 180],
];

export const WAVE_TONES = [
    [255, 255, 255],
    [0, 0, 0],
];

export const STAR_TONES = [
    [255, 255, 255],
];
