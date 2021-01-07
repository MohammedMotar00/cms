import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    border: "1px solid red",
    display: "flex",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    justifyContent: "center",
  },

  card: {
    maxWidth: 345,
    border: " 1px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  font: {
    fontSize: "16px",
  },
}));
