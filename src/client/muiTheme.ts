import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        text: {
            primary: "rgba(23, 60, 76, 0.7)",
        },
        primary: {
            main: "#173c4c",
        },
    },
    typography: {
        h1: {
            fontSize: "3rem",
        },
        h6: {
            fontSize: "1.1rem",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: 0,
                },
            },
        },
        MuiFormControl: {
            defaultProps: {
                sx: { marginBottom: "8px" },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                },
                input: {
                    padding: "3.5px 9px",
                },
                notchedOutline: {
                    "& legend": {
                        width: "auto",
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    minWidth: 180,
                    textTransform: "unset",
                },
                text: {
                    textDecoration: "underline",
                    justifyContent: "flex-start",
                    padding: 0,
                    fontWeight: 600,
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
            },
        },
    },
});
