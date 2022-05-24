const paleteColors = {
  // Primary Colors
  white: 'hsl(0, 0%, 100%)',
  brightBlue: 'hsl(220, 98%, 61%)',
  // Light Theme Colors
  veryLightGray: 'hsl(0, 0%, 96%)',
  veryLightGrayishBlue: 'hsl(0, 0%, 87%)',
  lightGrayishBlue: 'hsl(233, 11%, 84%)',
  lightGrayishPurple: 'hsl(269, 17%, 71%)',
  darkGrayishBlue: 'hsl(236, 9%, 61%)',
  veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
  blue: 'hsl(238, 63%, 64%)',
  // Dark Theme Colors
  veryDarkBlue: 'hsl(235, 21%, 11%)',
  veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
  lightGrayishBlue2: 'hsl(234, 39%, 85%)',
  darkGrayishBlue2: 'hsl(234, 11%, 52%)',
  veryDarkGrayishBlue2: 'hsl(233, 14%, 35%)',
  veryDarkGrayishBlue3: 'hsl(237, 14%, 26%)',
  black: 'hsl(0, 0%, 0%)',
  darkPurple: 'hsl(270, 71%, 32%)'
};

export const colors = {
  //Primary colors
  logoColor: paleteColors.white,
  activeFilterColor: paleteColors.brightBlue,
  screenHeader: paleteColors.white,
  //Light Theme colors
  lightTheme: {
    textColor: paleteColors.veryDarkGrayishBlue,
    bgColor: paleteColors.veryLightGray,
    taskBgColor: paleteColors.white,
    taskBorder: paleteColors.veryLightGrayishBlue,
    taskSideBorders: paleteColors.lightGrayishPurple,
    checkboxBorder: paleteColors.veryLightGrayishBlue,
    completedTaskTextColor: paleteColors.lightGrayishBlue,
    filtersTextColor: paleteColors.darkGrayishBlue,
    filtersBgColor: paleteColors.white,
    addTaskFieldColor: paleteColors.darkGrayishBlue,
    taskScreenBackground: paleteColors.blue,
  },
  //Dark Theme colors
  darkTheme: {
    textColor: paleteColors.lightGrayishBlue2,
    bgColor: paleteColors.veryDarkBlue,
    taskBgColor: paleteColors.veryDarkDesaturatedBlue,
    taskBorder: paleteColors.veryDarkGrayishBlue3,
    checkboxBorder: paleteColors.veryDarkGrayishBlue3,
    taskSideBorders: paleteColors.black,
    completedTaskTextColor: paleteColors.veryDarkGrayishBlue2,
    filtersTextColor: paleteColors.veryDarkGrayishBlue2,
    filtersBgColor: paleteColors.veryDarkDesaturatedBlue,
    addTaskFieldColor: paleteColors.darkGrayishBlue2,
    taskScreenBackground: paleteColors.darkPurple
  }
};