# Puzzle Task Solution

A lightweight Node.js application that solves the "Puzzle Task" (Задача-пазл) test assignment. The application reads input data from a text file, processes it, and outputs the result directly to the terminal.

## Features

- Reads initial data from `public/source.txt`.
- Processes the puzzle logic via Node.js.
- Displays the final solution in the console/terminal.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd puzzle
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Input Data Configuration

If you want to test the application with **different input data**, you have two options:

- Open `public/source.txt` and replace its content with your custom data.
- Delete the existing `public/source.txt` and replace it with your own text file (it must be named exactly `source.txt`).

### How to Run

1. Ensure your source data is placed in `public/source.txt`.
2. Run the development command:
   ```bash
   npm run dev
   ```

The script will execute and print the final solution to the terminal as a **string of digits** (e.g., `1234567890...`).
