# 🧠 React + Regex Assignment: Password Validation

## ✅ Task

Create a React component that validates passwords using **Regular Expressions (Regex)**.  
The password must meet the following rules:

1. **At least 3 special characters** (e.g., `@, #, $, %, !, &, *`)  
2. **At least 1 uppercase letter** (A–Z)  
3. **At least 2 numbers** (0–9)  
4. **Minimum of 8 characters in total length**  
5. **No spaces allowed**  

---

## 📋 Requirements

- Create a password input form in React.  
- Use **regex** to validate the password when the form is submitted.  
- If the password is valid → show a green **success message**.  
- If invalid → show a red **error message**.  

---

## 🔎 Example Regex Pattern

```regex
^(?=.*[A-Z])(?=(?:.*[^A-Za-z0-9]){3,})(?=(?:.*\d){2,})(?!.*\s).{8,}$
🧪 Example Output

Password: My@Pa$$word12

✅ Strong password!


Password: weak pass

❌ Password must have at least 1 uppercase, 3 special characters, 2 numbers, 8 characters total, and no spaces.



💡 Hints

Use useState to manage input and messages.

Use regex.test(password) to check if the password matches the pattern.

Apply conditional rendering for success/error messages.