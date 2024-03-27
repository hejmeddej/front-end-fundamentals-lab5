let friends = ["Jens", "Peter", "Bo", "Sarah", "Louise"];

for (let i = 0; i < friends.length; i++) {
    for (let j = 99; j > 2; j--) {
        let Message = j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " line of code in the file";        
        console.log(Message);
    }
    let Message = "2 lines of code in the file, 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file";
        console.log(Message);
        Message = "1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";
        console.log(Message);
}