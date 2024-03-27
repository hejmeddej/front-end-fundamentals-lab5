let friends = ["Jens", "Peter", "Bo", "Sarah", "Louise"];

// Loop through each friend
for (let i = 0; i < friends.length; i++) {
    // Start from 99 lines and go down to 3 because we handle 2 and 1 separately
    for (let j = 99; j > 2; j--) {
        let Message = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file";        
        console.log(Message);
    }
    // Handle the transition from 2 lines to 1 line separately
    let Message = "2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file";
        console.log(Message);
        // Finally, handle the last line
        Message = "1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
        console.log(Message);
}