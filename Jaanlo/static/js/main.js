document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("urlInput");
  const submitButton = document.getElementById("submitButton");
  const resultContainer = document.getElementById("resultContainer");

  submitButton.addEventListener("click", async () => {
    const url = urlInput.value;
    if (url) {
      const companyDescription = await fetchCompanyDescription(url);
      resultContainer.innerHTML = companyDescription;
    } else {
      resultContainer.innerHTML = "Please enter a valid URL.";
    }
  });
});

async function fetchCompanyDescription(url) {
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
      return data.company_description;
    } else {
      throw new Error("Failed to fetch company description.");
    }
  } catch (error) {
    console.error(error);
    return "An error occurred while fetching the company description.";
  }
}