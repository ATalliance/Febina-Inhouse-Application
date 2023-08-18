 // Your JavaScript code
 document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    const mobile = document.getElementById("mobile").value;
    const gst = document.getElementById("gst").value;

    const formData = {
        "name": name,
        "Mobilenumber": parseInt(mobile),
        "GST": parseInt(gst),
        "country": country
    };

    try {
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Data submitted successfully!";
    messageDiv.style.display = "block"; // Display the message div

    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("country").value = "+91"; // Set default value
    document.getElementById("mobile").value = "";
    document.getElementById("gst").value = "";
}else {
            console.error("Error submitting data.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});