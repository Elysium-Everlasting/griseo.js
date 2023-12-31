/**
 * Select Graphic Rendition (SGR) parameters for ANSI escape codes.
 * @see https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_.28Select_Graphic_Rendition.29_parameters
 */
export const SGR_PARAMETERS = {
  RESET: 0,
  BOLD: 1,
  DIM: 2,
  ITALIC: 3,
  UNDERLINE: 4,
  BLINK_SLOW: 5,
  BLINK_FAST: 6,
  NEGATIVE: 7,
  CONCEAL: 8,
  STRIKETHROUGH: 9,
  BOLD_OFF: 22,
  ITALIC_OFF: 23,
  UNDERLINE_OFF: 24,
  BLINK_OFF: 25,
  NEGATIVE_OFF: 27,
  CONCEAL_OFF: 28,
  STRIKETHROUGH_OFF: 29,
  OVERLINE: 53,
  OVERLINE_OFF: 55,

  FG_BLACK: 30,
  FG_RED: 31,
  FG_GREEN: 32,
  FG_YELLOW: 33,
  FG_BLUE: 34,
  FG_MAGENTA: 35,
  FG_CYAN: 36,
  FG_WHITE: 37,
  FG_DEFAULT: 39,
  FG_BRIGHT_BLACK: 90,
  FG_BRIGHT_RED: 91,
  FG_BRIGHT_GREEN: 92,
  FG_BRIGHT_YELLOW: 93,
  FG_BRIGHT_BLUE: 94,
  FG_BRIGHT_MAGENTA: 95,
  FG_BRIGHT_CYAN: 96,
  FG_BRIGHT_WHITE: 97,

  BG_BLACK: 40,
  BG_RED: 41,
  BG_GREEN: 42,
  BG_YELLOW: 43,
  BG_BLUE: 44,
  BG_MAGENTA: 45,
  BG_CYAN: 46,
  BG_WHITE: 47,
  BG_DEFAULT: 49,
  BG_BRIGHT_BLACK: 100,
  BG_BRIGHT_RED: 101,
  BG_BRIGHT_GREEN: 102,
  BG_BRIGHT_YELLOW: 103,
  BG_BRIGHT_BLUE: 104,
  BG_BRIGHT_MAGENTA: 105,
  BG_BRIGHT_CYAN: 106,
  BG_BRIGHT_WHITE: 107,
} as const

/**
 * A mapping of modifier names to SGR parameters, i.e. [modifier, modifier-off].
 */
export const MODIFIER_COLORS = {
  /**
   * Reset the current style.
   */
  reset: [SGR_PARAMETERS.RESET, SGR_PARAMETERS.RESET],

  /**
   * Make the text bold.
   */
  bold: [SGR_PARAMETERS.BOLD, SGR_PARAMETERS.BOLD_OFF],

  /**
   * Make the text have lower opacity.
   */
  dim: [SGR_PARAMETERS.DIM, SGR_PARAMETERS.BOLD_OFF],

  /**
   * Make the text italic. __Not widely supported__
   */
  italic: [SGR_PARAMETERS.ITALIC, SGR_PARAMETERS.ITALIC_OFF],

  /**
   * Put a horizontal line below the text. __Not widely supported__
   */
  underline: [SGR_PARAMETERS.UNDERLINE, SGR_PARAMETERS.UNDERLINE_OFF],

  /**
   * Put a horizontal line above the text. __Not widely supported__
   */
  overline: [SGR_PARAMETERS.OVERLINE, SGR_PARAMETERS.OVERLINE_OFF],

  /**
   * Invert background and foreground colors.
   */
  inverse: [SGR_PARAMETERS.NEGATIVE, SGR_PARAMETERS.NEGATIVE_OFF],

  /**
   * Print the text but make it invisible.
   */
  hidden: [SGR_PARAMETERS.CONCEAL, SGR_PARAMETERS.CONCEAL_OFF],

  /**
   * Puts a horizontal line through the center of the text. __Not widely supported__
   */
  strikethrough: [SGR_PARAMETERS.STRIKETHROUGH, SGR_PARAMETERS.STRIKETHROUGH_OFF],
} satisfies ColorMapping

/**
 * A mapping of foreground color names to SGR parameters, i.e. [foreground, default-foreground].
 */
export const FOREGROUND_COLORS = {
  black: [SGR_PARAMETERS.FG_BLACK, SGR_PARAMETERS.FG_DEFAULT],
  red: [SGR_PARAMETERS.FG_RED, SGR_PARAMETERS.FG_DEFAULT],
  green: [SGR_PARAMETERS.FG_GREEN, SGR_PARAMETERS.FG_DEFAULT],
  yellow: [SGR_PARAMETERS.FG_YELLOW, SGR_PARAMETERS.FG_DEFAULT],
  blue: [SGR_PARAMETERS.FG_BLUE, SGR_PARAMETERS.FG_DEFAULT],
  magenta: [SGR_PARAMETERS.FG_MAGENTA, SGR_PARAMETERS.FG_DEFAULT],
  cyan: [SGR_PARAMETERS.FG_CYAN, SGR_PARAMETERS.FG_DEFAULT],
  white: [SGR_PARAMETERS.FG_WHITE, SGR_PARAMETERS.FG_DEFAULT],

  /**
   * Alias for `blackBright`.
   */
  gray: [SGR_PARAMETERS.FG_BRIGHT_BLACK, SGR_PARAMETERS.FG_DEFAULT],

  /**
   * Alias for `blackBright`.
   */
  grey: [SGR_PARAMETERS.FG_BRIGHT_BLACK, SGR_PARAMETERS.FG_DEFAULT],

  blackBright: [SGR_PARAMETERS.FG_BRIGHT_BLACK, SGR_PARAMETERS.FG_DEFAULT],
  redBright: [SGR_PARAMETERS.FG_BRIGHT_RED, SGR_PARAMETERS.FG_DEFAULT],
  greenBright: [SGR_PARAMETERS.FG_BRIGHT_GREEN, SGR_PARAMETERS.FG_DEFAULT],
  yellowBright: [SGR_PARAMETERS.FG_BRIGHT_YELLOW, SGR_PARAMETERS.FG_DEFAULT],
  blueBright: [SGR_PARAMETERS.FG_BRIGHT_BLUE, SGR_PARAMETERS.FG_DEFAULT],
  magentaBright: [SGR_PARAMETERS.FG_BRIGHT_MAGENTA, SGR_PARAMETERS.FG_DEFAULT],
  cyanBright: [SGR_PARAMETERS.FG_BRIGHT_CYAN, SGR_PARAMETERS.FG_DEFAULT],
  whiteBright: [SGR_PARAMETERS.FG_BRIGHT_WHITE, SGR_PARAMETERS.FG_DEFAULT],
} satisfies ColorMapping

/**
 * A mapping of background color names to SGR parameters, i.e. [background, default-background].
 */
export const BACKGROUND_COLORS = {
  bgBlack: [SGR_PARAMETERS.BG_BLACK, SGR_PARAMETERS.BG_DEFAULT],
  bgRed: [SGR_PARAMETERS.BG_RED, SGR_PARAMETERS.BG_DEFAULT],
  bgGreen: [SGR_PARAMETERS.BG_GREEN, SGR_PARAMETERS.BG_DEFAULT],
  bgYellow: [SGR_PARAMETERS.BG_YELLOW, SGR_PARAMETERS.BG_DEFAULT],
  bgBlue: [SGR_PARAMETERS.BG_BLUE, SGR_PARAMETERS.BG_DEFAULT],
  bgMagenta: [SGR_PARAMETERS.BG_MAGENTA, SGR_PARAMETERS.BG_DEFAULT],
  bgCyan: [SGR_PARAMETERS.BG_CYAN, SGR_PARAMETERS.BG_DEFAULT],
  bgWhite: [SGR_PARAMETERS.BG_WHITE, SGR_PARAMETERS.BG_DEFAULT],
  bgGray: [SGR_PARAMETERS.BG_BRIGHT_BLACK, SGR_PARAMETERS.BG_DEFAULT],
  bgGrey: [SGR_PARAMETERS.BG_BRIGHT_BLACK, SGR_PARAMETERS.BG_DEFAULT],

  bgBlackBright: [SGR_PARAMETERS.BG_BRIGHT_BLACK, SGR_PARAMETERS.BG_DEFAULT],
  bgRedBright: [SGR_PARAMETERS.BG_BRIGHT_RED, SGR_PARAMETERS.BG_DEFAULT],
  bgGreenBright: [SGR_PARAMETERS.BG_BRIGHT_GREEN, SGR_PARAMETERS.BG_DEFAULT],
  bgYellowBright: [SGR_PARAMETERS.BG_BRIGHT_YELLOW, SGR_PARAMETERS.BG_DEFAULT],
  bgBlueBright: [SGR_PARAMETERS.BG_BRIGHT_BLUE, SGR_PARAMETERS.BG_DEFAULT],
  bgMagentaBright: [SGR_PARAMETERS.BG_BRIGHT_MAGENTA, SGR_PARAMETERS.BG_DEFAULT],
  bgCyanBright: [SGR_PARAMETERS.BG_BRIGHT_CYAN, SGR_PARAMETERS.BG_DEFAULT],
  bgWhiteBright: [SGR_PARAMETERS.BG_BRIGHT_WHITE, SGR_PARAMETERS.BG_DEFAULT],
} satisfies ColorMapping

/**
 * All recognized colors.
 */
export const COLORS = {
  ...MODIFIER_COLORS,
  ...FOREGROUND_COLORS,
  ...BACKGROUND_COLORS,
}

/**
 * Recognized modifier names.
 */
export const modifierNames = Object.keys(MODIFIER_COLORS)

/**
 * Recognized foreground color names.
 */
export const foregroundColorNames = Object.keys(FOREGROUND_COLORS)

/**
 * Recognized background color names.
 */
export const backgroundColorNames = Object.keys(BACKGROUND_COLORS)

/**
 * Recognized color names.
 */
export const colorNames = [...foregroundColorNames, ...backgroundColorNames]

/**
 * Recognized SGR parameters.
 */
export type SgrParameters = typeof SGR_PARAMETERS

/**
 * Recognized SGR parameter names.
 */
export type SgrParameterName = keyof SgrParameters

/**
 * Recognized SGR code values.
 */
export type SgrCode = SgrParameters[SgrParameterName] | AutocompleteNumber

/**
 * A color pair describes the opening and closing SGR parameters for a colored string.
 */
export type ColorPair = [SgrCode | AutocompleteNumber, SgrCode | AutocompleteNumber]

/**
 * A color mapping describes the SGR parameters for a color name.
 */
export type ColorMapping = Record<string, ColorPair>

/**
 * This type can be in a union with a defined union of other numbers to allow
 * any number as a valid value, but still accommodate TypeScript autocompletion.
 *
 * Idk the logic for this working.
 * It's needed because {@example 0 | 1 | number} will not autocomplete.
 */
type AutocompleteNumber = number & NonNullable<unknown>
