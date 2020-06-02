import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { InputAdornment, TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faStickyNote } from "@fortawesome/free-solid-svg-icons";

const TransactionSchema = yup.object().shape({
  money: yup.number().required(),
  note: yup
    .string()
    .trim()
    .min(10, "Note must be at least 10 characters")
    .required(),
    
});

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    }
  })
);

toast.configure();

const TransactionForm = props => {
  const notify = () => toast("Transaction successfull.", {
    autoClose:1000
  });
  // const infoNotify = () => toast.info("For Income (+) or Expense (-) in Money field.", {
  //   position: toast.POSITION.TOP_CENTER,
  //   autoClose:2000
  // });

  const { addTransaction } = props;
  const { register, handleSubmit, errors } = useForm({
    validationSchema: TransactionSchema
  });
  const onSubmit = (data, e) => {
    console.log(data);
    addTransaction(data);
    notify();
    e.target.reset();
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div className="container">
          <TextField
            name="money"
            inputRef={register}
            error={!!errors.money}
            helperText={errors.money ? "Money must be a number" : ""}
            placeholder="Money"
            id="Money"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon className="font-icon" icon={faRupeeSign} />
                </InputAdornment>
              )
            }}
          />
          <TextField
            name="note"
            inputRef={register}
            error={!!errors.note}
            helperText={errors.note ? errors.note.message : ""}
            placeholder="Note"
            id="note"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon className="font-icon" icon={faStickyNote} />
                </InputAdornment>
              )
            }}
          />
          <button type="submit" class="btn btn-light btn-sm">Submit</button>          
        </div>
      </form>
    </React.Fragment>
  );
};

export default TransactionForm;
