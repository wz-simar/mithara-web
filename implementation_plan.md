# Extraction Guide: "Let's Know You Better" Form

This document contains everything you need to implement the "Let's Know You Better" form on another website. It includes the API logic, required libraries, React components, and detailed instructions.

## 1. Prerequisites and Dependencies

To execute this part in another project, you must ensure the following are installed and configured:

**NPM Packages:**
- `react-hot-toast` (for success/error notifications)
- `react-icons` (for the checkmark and close icons)

```bash
npm install react-hot-toast react-icons
```

**Styling:**
The form relies heavily on **Tailwind CSS**. Make sure Tailwind CSS is installed in the target project. It also uses a custom CSS variable `var(--accent-1)` for the button and border colors. You should define this in your global CSS:

```css
:root {
  --accent-1: #EA6647; /* Set this to your desired brand color */
}
```

## 2. API Endpoints and Process

The form submits data sequentially to two different background services over `POST` requests. In your new website, you must provide `.env` variables for the base URLs.

**Process Flow:**
1. Validates that Name, Phone, and Email are present.
2. Validates that Phone is exactly 10 digits long.
3. Submits `POST` request to to the base application API (`/user/register-user`).
4. Without waiting for the first request to succeed, it immediately submits a second `POST` request to the wellness backend API (`/app/request-client`).
5. Based on the response of the first request, it handles success or failure UI states.

**API Details:**

**Request 1 (Core Registration)**
- **Method**: `POST`
- **URL**: `NEXT_PUBLIC_APP_BASE_URL/user/register-user`
- **Body**:
  ```json
  {
    "name": "User Name",
    "phoneNumber": "1234567890",
    "email": "email@example.com",
    "goal": "User's specific goal here",
    "frontEndClient": "Kk_Wellness"
  }
  ```

**Request 2 (Wellness Backend Request)**
- **Method**: `POST`
- **URL**: `NEXT_PUBLIC_APP_BACKEND_URL/app/request-client`
- **Body**:
  ```json
  {
    "name": "User Name",
    "mobileNumber": "1234567890",
    "email": "email@example.com",
    "dob": "01-01-2000",
    "coachID": "new781"
  }
  ```

## 3. Extracted React Code

Here is the complete, self-contained React code snippet containing the form and its sub-components, consolidated into a single file for easy copying. You can save this as `LetsKnowYouBetterModal.jsx` in the new website.

```jsx
"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegCircleCheck, FaXmark } from "react-icons/fa6";

// Replace these with your actual environment variables in the new project
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL || "https://your-base-api.com";
const WELLNESSZ_API_URL = process.env.NEXT_PUBLIC_APP_BACKEND_URL || "https://your-wellness-api.com";

// Sub-Component: Modal Wrapper
function Modal({ onClose, className, children }) {
  function handleClickOutside(e) {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  }

  useEffect(function () {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed h-screen w-screen bg-[#0000008D] z-[1000] top-0 left-0 ${className}`}
    >
      {children}
    </div>
  );
}

// Sub-Component: Form Control Input
function FormControl({ title, className, ...props }) {
  return (
    <label className={`text-[14px] block my-4 ${className}`}>
      <span className="cursor-pointer font-bold text-zinc-600">{title}</span>
      <input
        type={props.type || "text"}
        className="input ring-[1px] ring-zinc-200 shadow-md shadow-zinc-200 w-full mt-2 px-4 py-[10px] rounded-[8px] focus:outline-none"
        {...props}
      />
    </label>
  );
}

// Sub-Component: Thank You Screen
function ThankYouMessage({ onClose }) {
  return (
    <Modal onClose={onClose} className="flex items-center justify-center">
      <div className="max-w-[500px] w-full bg-white p-4 rounded-md relative text-black">
        <FaXmark onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-xl" />
        <h2 className="text-center text-[28px] font-bold mt-4">Thank You For Registering</h2>
        <FaRegCircleCheck className="text-green-600 w-[64px] h-[64px] mt-8 mx-auto" />
        <div className="mt-8 mb-4 flex items-center justify-center">
          <p className="text-gray-500">We will reach out to you soon.</p>
        </div>
      </div>
    </Modal>
  );
}

// Main Component
export default function LetsKnowYouBetterModal({ referralCode, sponsoredBy }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function createCustomer(e) {
    e.preventDefault();
    try {
      const formElements = e.currentTarget;
      const data = {
        name: formElements.name.value,
        phoneNumber: formElements.phoneNumber.value,
        email: formElements.email.value,
        goal: formElements.goal.value,
        frontEndClient: "Kk_Wellness",
      };

      if (!data.name || !data.phoneNumber || !data.email) {
        throw new Error("Please Enter Name, Email, Phone Number");
      }

      if (data.phoneNumber.length !== 10) {
        throw new Error("Phone Number should be 10 digits in length!");
      }

      // 1. Submit to Base API
      const response = await fetch(`${API_BASE_URL}/user/register-user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      }).then((res) => res.json());

      // 2. Submit to Wellness Backend API (Concurrent/Background)
      fetch(`${WELLNESSZ_API_URL}/app/request-client`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          mobileNumber: data.phoneNumber,
          email: data.email,
          dob: "01-01-2000",
          coachID: "new781",
        }),
        cache: "no-store",
      }).then((res) => res.json()).catch(console.error);

      console.log("Registration Response:", response);

      if (response.success) {
        setFormSubmitted(true);
        toast.success(response?.data?.message || "Successfully created User!");
      } else {
        toast.error(response?.data?.message || "Please try again Later!");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "An Error Occurred";
      toast.error(errorMsg);
    }
  }

  if (formSubmitted) {
    return <ThankYouMessage onClose={() => setFormSubmitted(false)} />;
  }

  return (
    <form
      id="register"
      onSubmit={createCustomer}
      className="w-full mx-auto py-8 md:py-20 rounded-md relative px-[20px] text-black"
    >
      <div className="max-w-[1200px] w-full bg-[#FAF8F8] mx-auto px-8 py-10 rounded-[24px] border-[1px] border-[var(--accent-1)]">
        <h2 className="text-[20px] md:text-[24px] font-bold">Let's Know You Better</h2>
        <div className="grid md:grid-cols-2 gap-x-6">
          <FormControl title="Name" placeholder="Enter Your Name" name="name" />
          <FormControl title="Phone" placeholder="Enter Your Phone" name="phoneNumber" type="tel" />
          <FormControl title="Email" placeholder="Enter Your Email" name="email" type="email" />
          <FormControl title="What is your goal" placeholder="What is your goal" name="goal" />
        </div>
        <button
          type="submit"
          className="bg-[var(--accent-1)] block text-white font-bold px-8 py-3 mx-auto mt-8 rounded-[8px] hover:opacity-90 transition-opacity"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
```

## How to execute on another website:
1. Ensure the new site is using React (preferably Next.js given the "use client" directive).
2. Run the NPM install command for `react-hot-toast` and `react-icons`.
3. Add a `<Toaster />` component from `react-hot-toast` to the root layout of the new website so error/success messages can appear.
4. Copy the consolidated code block above into a new file on the new website (e.g., `components/LetsKnowYouBetterModal.jsx`).
5. Ensure Tailwind CSS is configured properly and define the `--accent-1` CSS variable in the new project's main CSS file.
6. Provide the environment variables `NEXT_PUBLIC_APP_BASE_URL` and `NEXT_PUBLIC_APP_BACKEND_URL` in the `.env` file of your target project.
