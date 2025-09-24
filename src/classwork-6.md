# Assignment: Add Validation and Conditional Button Enabling

## Objective
Enhance the existing `CreatePost` component by adding **validation rules** for the Title and Body fields and **conditionally enable the Create button** only when all requirements are met.

---

## Requirements

### Title Field
- Must be **required** (cannot be empty).  
- Must have a **minimum length of 4 characters**.  
- Must have a **maximum length of 20 characters**.  

### Body Field
- Must be **required** (cannot be empty).  
- Must have a **minimum length of 10 characters**.  
- Must have a **maximum length of 200 characters**.  

### Create Button
- The **Create** button should only be **enabled** when all Title and Body validations are satisfied.  
- If the inputs are invalid, the button should remain **disabled**.

---

## Submission
- Keep the existing functionality of posting to `https://jsonplaceholder.typicode.com/posts`.  
- Maintain the success message `Post Created Successfully!` when the POST request succeeds.  

---

## Bonus (Optional)
- Show **real-time feedback** for invalid fields (e.g., warning messages or red borders).  
- Use **React state** to track field validity and button enabled/disabled status.
