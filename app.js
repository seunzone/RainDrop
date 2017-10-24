const dropApp = (value) => {
    
        //empty variable intended to hold the desried output
        let output = "";
    
        //check if to see if thr argument is a number
        if (typeof (value) === "number") {
            //if the argument is a number do the following:
            if (value === 0) {
                return 0;
            }
    
            if (value % 3 === 0) {
                output += "Pling";
            }
    
            if (value % 5 === 0) {
                output += "Plang";
            }
    
            if (value % 7 === 0) {
                output += "Plong";
            }
            //if the argument is not a number this is returned
        } else {
            return 'Please enter a number';
        }
        //if the argument was a number, check if the output variable has a value
        //then return the output
        if (output) {
            return output;
            //return the argument
        } else {
            return value;
        }
    
    };
    
module.exports = dropApp;
    