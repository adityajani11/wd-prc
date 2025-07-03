async function sequentialOperations() {
  try {
    console.log('Starting sequential operations...');

    const result1 = await new Promise(resolve => setTimeout(() => {
      console.log('Operation 1 complete');
      resolve(100);
    }, 200));

    const result2 = await new Promise(resolve => setTimeout(() => {
      console.log(`Operation 2 complete, depends on ${result1}`);
      resolve(result1 / 2);
    }, 150));

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (result2 > 40) {
          console.log(`Operation 3 complete, depends on ${result2}`);
          resolve(result2 + 5);
        } else {
          reject(new Error("Result from operation 2 was too small!"));
        }
      }, 100);
    });

    console.log('All sequential operations finished. Final result:', result3); // Expected: 55
  } catch (error) {
    console.error('An error occurred in sequential operations:', error.message);
  }
}

sequentialOperations();

// Example with a rejection
async function sequentialWithError() {
  try {
    const data = await Promise.resolve(10);
    const result = await new Promise((resolve, reject) => setTimeout(() => reject("Failed in step 2"), 50));
    console.log("This won't be reached:", result); // This line will not be executed
  } catch (error) {
    console.error("Caught error:", error); // Expected: Caught error: Failed in step 2
  }
}
sequentialWithError();