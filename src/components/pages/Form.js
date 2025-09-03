import { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

export default function Form({ onNext, onData, onCancel }) {
    const [amount, setAmount] = useState("");

    return (
        <div>
            <div className="header">
            <IconButton className="exit-btn"
            onClick={onCancel} aria-label="close" style={{
            position: "absolute",
            right: "10px",
            top: "-10px",
            zIndex: 1000,
            WebkitAppRegion: "no-drag",
            color: "white" }}>

                <CloseIcon />
            </IconButton>
                <h1>Price Calculator</h1>
            <p>Enter some details...</p>
            </div>
            <div className="form-container" >
                
            <TextField
                label="Amount of characters"
                variant="outlined" 
                fullWidth
                />

                <TextField
                label="Background complexity"
                variant="outlined" 
                fullWidth
                />

                <TextField
                label="Rendering style"
                variant="outlined" 
                fullWidth
                />
            </div>
            <div className="button-container">
            <button className="bottom-btn" onClick={() => {onData({ amount }); onNext();
            }}>Calculate</button>
            </div>
        </div>
    );
}