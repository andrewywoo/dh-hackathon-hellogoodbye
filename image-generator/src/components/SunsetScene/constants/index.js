// Canvas Constants
export const CANVAS_MAX_HEIGHT = 600;
export const CANVAS_MAX_WIDTH = 800;

// Mountain Constants
export const CANVAS_HALF_MAX_HEIGHT = CANVAS_MAX_HEIGHT / 2;
export const FIRST_MOUNTAIN_LOWER_Y_RANGE = CANVAS_HALF_MAX_HEIGHT + 100;
export const SECOND_MOUNTAIN_MAX_HEIGHT = CANVAS_HALF_MAX_HEIGHT + 110;
export const SECOND_MOUNTAIN_LOWER_Y_RANGE = SECOND_MOUNTAIN_MAX_HEIGHT + 50;

// Sun Constants
export const SUN_DIAMETER = CANVAS_MAX_HEIGHT/4;

// Star Constants
export const STAR_RADIUS = [[2, 8], [3, 10], [4,13]];

// Color Themes
export const MOUNTAIN_TONES = [
    [37, 106, 220],
    [31, 64, 104],
];

export const LAND_TONES = [
    [243, 1, 102],
    [255, 235, 0],
    [72, 48, 147],
];

export const HORIZON_TONES = [
    [31, 120, 180],
];
