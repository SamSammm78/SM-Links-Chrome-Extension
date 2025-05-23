# SM-Links-Chrome-Extension

This is a Chrome extension designed to streamline the process of sending product data to a Google Apps Script endpoint. The extension allows users to input product details and send them directly to a database via a Google Apps Script web app.

## Features

- **Popup Form**: A user-friendly popup form to input product details such as name, image URL, price, and type.
- **Google Apps Script Integration**: Sends data to a Google Apps Script endpoint for processing and storage.
- **Dynamic URL Capture**: Automatically captures the URL of the active tab when submitting the form.
- **Customizable Types**: Dropdown menu to select product types (e.g., T-Shirts, Hoodies, Accessories, etc.).


## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the project folder.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Fill in the product details:
   - **Item Name**: Name of the product.
   - **Image**: URL of the product image.
   - **Price**: Price of the product.
   - **Type**: Select the product type from the dropdown.
3. Click "Send" to submit the data. The extension will automatically capture the URL of the active tab and include it in the submission.

## Configuration

The `data.json` file contains the URL of the Google Apps Script endpoint. Update this file if the endpoint changes:

```json
{
    "dbAppLink": "https://script.google.com/macros/s/your-script-id/exec"
}
```

https://samsammm78.github.io/SM-Links-Chrome-Extension/Website%20Version/index.html