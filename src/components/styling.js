import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    justifyContent: "center",
  },

  card: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  font: {
    fontSize: "16px",
  },
}));
