const sendToServer = async (chatData) => {
  try {
    const response = await fetch("https://localhost:7070/api/Chat/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chatData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Server Response:", result);

  } catch (error) {
    console.error("Error:", error);
  }
};