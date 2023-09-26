## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed for the frontend (React.js)
- Python and Django installed for the backend
- API key for weather data (OpenWeatherMap)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/SrithinAV/weather.git
    cd weather
    ```

2. **Frontend Setup:**

    ```bash
    cd frontend
    npm install react-scripts
    npm run build
    ```

3. **Backend Setup:**

    ```bash
    cd weather
    python manage.py migrate
    python manage.py runserver
    ```

4. **API Key Setup:**

    in the view.py there is a variable called api_key=[], there will be an initial key if you want to change the api do as follows:
    ```python
    api_key = 'your-openweatherapp-api-key'
    ```

    Replace `'your-openweatherapp-api-key'` with your actual OpenWeatherMap API key.

## Usage

To use the Weather Details App, follow these steps:

1. Open the app in your web browser.
2. Enter the location you want to search for.
3. Click the "Get Weather" button.
4. The app will retrieve and display the weather details for the specified location.

