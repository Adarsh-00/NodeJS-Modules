const os = require('os');

try {
    const platfrom = os.platform(); // Get the platform of the operating system
    const architecture = os.arch(); // Get the architecture of the operating system
    const cups = os.cpus(); // Get information about the CPU(s)
    const totalMemory = os.totalmem();  // Get the total memory of the system give in bytes (/1024 to convert to MB)
    const freeMemory = os.freemem(); // Get the free memory of the system
    const userInfo = os.userInfo(); // Get information about the current user

    console.log(`Operating System Platform: ${platfrom}`);
    console.log(`Operating System Architecture: ${architecture}`);
    console.log(`CPU Information: ${JSON.stringify(cups, null, 2)}`);
    console.log(`Total Memory: ${totalMemory} in bytes and free Memory: ${freeMemory} in bytes`);
    console.log(`User Information: ${JSON.stringify(userInfo, null, 2)}`);

} catch (error) {
   console.log(error.message); 
}
