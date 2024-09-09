
```markdown
# React Icon Picker

React Icon Picker is a customizable and interactive icon picker component for React applications. It allows users to browse and select icons from a paginated view, with adjustable dimensions and configurations. Perfect for integrating icon selection functionality into any React-based project.

## Features

- **Customizable Pagination:** Set the number of rows and columns of icons per page.
- **Adjustable Icon Dimensions:** Configure the height and width of each icon.
- **Configurable Picker Dimensions:** Adjust the dimensions of the icon picker with default values.
- **Pagination Support:** Easily navigate through multiple pages of icons.
- **Icon Selection:** Select icons, which updates the main view with the selected icon.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sumukhbendre123/IconPicker.git
   cd IconPicker
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

### Basic Example

```jsx
import React, { useState } from 'react';
import IconPicker from './IconPicker'; // Adjust the path as needed

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <h1>Selected Icon: {selectedIcon}</h1>
      <IconPicker
        rowsInOnePage={3}
        columnsInOnePage={4}
        iconHeight={50}
        iconWidth={50}
        pickerHeight={600}
        pickerWidth={600}
        onSelectIcon={handleSelectIcon}
      />
    </div>
  );
};

export default App;
```

### Props

The `IconPicker` component accepts the following props:

- **`rowsInOnePage`** (number): Number of rows of icons in one page. Default is `3`.
- **`columnsInOnePage`** (number): Number of columns of icons in one page. Default is `4`.
- **`iconHeight`** (number): Height of each icon. Default is `50`.
- **`iconWidth`** (number): Width of each icon. Default is `50`.
- **`pickerHeight`** (number): Height of the icon picker. Default is `500`.
- **`pickerWidth`** (number): Width of the icon picker. Default is `500`.
- **`onSelectIcon`** (function): Callback function triggered when an icon is selected.

### Component Structure

- **`IconPicker.js`**: Main component file.
- **`IconPicker.css`**: Styles for the icon picker.
- **`icons.js`**: List of icons (or import from an external icon library).

### Development

1. **Run the Development Server:**

   ```bash
   npm start
   # or
   yarn start
   ```

   The development server will run at `http://localhost:3000`.

2. **Run Tests:**

   ```bash
   npm test
   # or
   yarn test
   ```

3. **Build the Component:**

   ```bash
   npm run build
   # or
   yarn build
   ```

   This command will create a production build of the component in the `build` directory.

### Contributing

1. **Fork the Repository**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make Your Changes and Commit:**

   ```bash
   git add .
   git commit -m "Add feature"
   ```

4. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a Pull Request**

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/sumukhbendre123/IconPicker) or contact [sumukhbendre@gmail.com](mailto:sumukhbendre@gmail.com).


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sumukhbendre123/IconPicker.git
   cd IconPicker
