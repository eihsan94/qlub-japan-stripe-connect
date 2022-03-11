import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        "primary": {
          bg: "#EB6860",
          color: "white",
          fontWeight:"normal",
          _hover: {
            bg: 'white',
            border: '1px solid #EB6860'
          }
        },
        // 4. We can override existing variants
        // solid: (props) => ({
        //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
        // }),
      },
    },
    Text:{
      variants:{
        "primary": {
          color:"#EB6860"
        }
      }
    }
  },
})

export default theme