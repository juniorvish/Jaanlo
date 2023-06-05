# Jaanlo

Jaanlo is a web application that helps users understand what a company does by analyzing their website. Users can enter a URL, and the app will display a paragraph explaining the company's purpose.

## Installation

1. Clone the repository:

```
git clone https://github.com/juniorvish/Jaanlo.git
```

2. Navigate to the project directory:

```
cd Jaanlo
```

3. Install the required Python packages:

```
pip install -r backend/requirements.txt
```

## Usage

1. Start the backend server:

```
python backend/server.py
```

2. Open the `frontend/index.html` file in your web browser.

3. Enter a URL in the input field and click the "Submit" button.

4. The app will display a paragraph explaining what the company does.

## Project Structure

- `frontend/index.html`: The main HTML file for the frontend.
- `frontend/css/style.css`: The CSS file containing the styles for the frontend.
- `frontend/js/main.js`: The JavaScript file handling the frontend logic.
- `backend/server.py`: The Python file containing the backend logic.
- `backend/requirements.txt`: The file listing the required Python packages.

## Dependencies

- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): For scraping text from the given URL.
- [OpenAI API](https://beta.openai.com/docs/): For generating the explanation paragraph using the GPT-3.5-turbo model.
- [Tailwind CSS](https://tailwindcss.com/): For styling the frontend UI.