const theme = {
  clr: {
    clrDark: "#333",
    clrLight: "#fff",
    clrAccent: "#00B712"
  },
  ff: {
    cursive: "'Cedarville Cursive', cursive",
    poppins: "Poppins, sans-serif"
  },
  fs: {
    fs400: "1rem",
    fs500: "1.5rem",
    fs600: "2.5rem"
  },
  fw: {
    fwRegular: "400",
    fwBold: "600"
  }
}

export type ThemeType = {
  theme: {
    clr: {
      clrDark: string,
      clrLight: string,
      clrAccent: string
    },
    ff: {
      cursive: string,
      poppins: string
    },
    fs: {
      fs400: string,
      fs500: string,
      fs600: string
    },
    fw: {
      fwRegular: string,
      fwBold: string
    }
  }
} 

export default theme
