# Jaanlo

Jaanlo is a web app that helps users understand what a company does by analyzing their website. Users can enter a URL, and the app will display a paragraph explaining the company's purpose.

## Installation

1. Clone the repository:

```
git clone https://github.com/juniorvish/Jaanlo.git
```

2. Change to the Jaanlo directory:

```
cd Jaanlo
```

3. Install the required Python packages:

```
pip install -r requirements.txt
```

## Usage

1. Start the Python server:

```
python server.py
```

2. Open your web browser and navigate to `http://localhost:5000`.

3. Enter a URL in the input field and click the "Submit" button to get a description of the company.

## Project Structure

- `index.html`: The main HTML file containing the structure of the web app.
- `static/css/tailwind.css`: The Tailwind CSS file for styling the web app.
- `static/js/main.js`: The JavaScript file handling the frontend logic and communication with the backend.
- `server.py`: The Python backend file that processes the URL and returns the company description using web scraping and OpenAI API.
- `requirements.txt`: The list of required Python packages for the project.