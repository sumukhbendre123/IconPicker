# Icon Picker Component

This project is a React-based Icon Picker component. The icon picker opens up when a small 100x100 `div` is clicked. The icon picker component allows for customization and pagination of icons.

## Features

- Customizable number of rows and columns per page
- Adjustable icon dimensions
- Configurable picker dimensions with default values
- Pagination support for icons
- Selection of icons which updates the main view

## Props

The `IconPicker` component accepts the following props:

- `rowsInOnePage` (number): Number of rows of icons in one page
- `columnsInOnePage` (number): Number of columns of icons in one page
- `iconHeight` (number): Height of each icon
- `iconWidth` (number): Width of each icon
- `pickerHeight` (number, default = 500): Height of the icon picker
- `pickerWidth` (number, default = 500): Width of the icon picker
- `onSelectIcon` (function): Callback function triggered when an icon is selected

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sumukhbendre123/IconPicker.git
   cd IconPicker
