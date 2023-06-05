document.addEventListener("DOMContentLoaded", () => {
  const inputUrl = document.getElementById("input_url");
  const submitButton = document.getElementById("submit_button");
  const resultParagraph = document.getElementById("result_paragraph");

  submitButton.addEventListener("click", async () => {
    const url = inputUrl.value;
    if (url) {
      try {
        const response = await fetch("/get-response", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        });

        if (response.ok) {
          const data = await response.json();
          resultParagraph.textContent = data.description;
        } else {
          resultParagraph.textContent = "Error: Unable to fetch the description.";
        }
      } catch (error) {
        resultParagraph.textContent = "Error: Unable to fetch the description.";
      }
    } else {
      resultParagraph.textContent = "Please enter a valid URL.";
    }
  });
});