document.getElementById("submission-form").addEventListener("submit", async function(event) {
    event.preventDefault();


    document.getElementById("dropdown-selection").disabled = true;
    document.getElementById("freetext-comment").disabled = true;

    document.getElementById("submit-button").hidden = true;
    document.getElementById("thank-you").hidden = false;

    const response = await fetch("https://backend-uxao.onrender.com/beijocador", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            attribute: document.getElementById("attribute").value,
            comment: document.getElementById("comment").value,
        })
    });

    await response.json();
});