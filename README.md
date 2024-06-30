# String Calculator TDD Kata

This project is an implementation of the String Calculator TDD Kata in TypeScript. The purpose of this kata is to practice Test-Driven Development (TDD) by writing a simple string calculator. Please refer this (https://osherove.com/tdd-kata-1)

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Project Setup

1. **Clone the repository**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the tests**

    ```bash
    npm test
    ```

## String Calculator Functionality

### Method: `add(numbers: string): number`

The `add` method can handle the following scenarios:

1. **Empty string**
    - Input: `""`
    - Output: `0`

2. **Single number**
    - Input: `"1"`
    - Output: `1`

3. **Two numbers**
    - Input: `"1,2"`
    - Output: `3`

4. **Unknown amount of numbers**
    - Input: `"1,2,3"`
    - Output: `6`

5. **New lines between numbers**
    - Input: `"1\n2,3"`
    - Output: `6`

6. **Different delimiters**
    - Input: `"//;\n1;2"`
    - Output: `3`

7. **Negative numbers**
    - Input: `"1,-2"`
    - Output: Exception with message "negative numbers not allowed -2"

8. **Numbers bigger than 1000 are ignored**
    - Input: `"2,1001"`
    - Output: `2`

9. **Delimiters of any length**
    - Input: `"//[***]\n1***2***3"`
    - Output: `6`

10. **Multiple delimiters**
    - Input: `"//[*][%]\n1*2%3"`
    - Output: `6`

11. **Multiple delimiters with length longer than one character**
    - Input: `"//[***][%%%]\n1***2%%%3"`
    - Output: `6`

## Running the Project

To run the project, you can use the `npm start` command, which will execute the `src/stringCalculator.ts` file.

```bash
npm start
